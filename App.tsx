/**
 * Travel App — Multi-Language (EN / नेपाली / हिंदी)
 * i18next + react-i18next implementation
 */

import './src/i18n'; // initialise i18n before anything else

import React, { useState, Suspense } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  ActivityIndicator,
} from 'react-native';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';

import HomeScreen from './src/screens/HomeScreen';
import ExploreScreen from './src/screens/ExploreScreen';
import BookingScreen from './src/screens/BookingScreen';
import ProfileScreen from './src/screens/ProfileScreen';

type TabKey = 'home' | 'explore' | 'booking' | 'profile';

type Destination = {
  name: string;
  country: string;
  emoji: string;
  price: string;
};

const TABS: { key: TabKey; icon: string }[] = [
  { key: 'home',    icon: '🏠' },
  { key: 'explore', icon: '🔭' },
  { key: 'booking', icon: '📋' },
  { key: 'profile', icon: '👤' },
];

function TabBar({ active, onPress }: { active: TabKey; onPress: (key: TabKey) => void }) {
  const { t } = useTranslation();
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.tabBar, { paddingBottom: insets.bottom || 12 }]}>
      {TABS.map(tab => {
        const isActive = active === tab.key;
        return (
          <TouchableOpacity
            key={tab.key}
            accessibilityRole="button"
            accessibilityLabel={t(`nav.${tab.key}`)}
            style={styles.tabItem}
            onPress={() => onPress(tab.key)}
            activeOpacity={0.75}>
            <View style={[styles.tabIconWrap, isActive && styles.tabIconWrapActive]}>
              <Text style={styles.tabIcon}>{tab.icon}</Text>
            </View>
            <Text style={[styles.tabLabel, isActive && styles.tabLabelActive]}>
              {t(`nav.${tab.key}`)}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

function AppContent() {
  const [activeTab, setActiveTab] = useState<TabKey>('home');
  const [bookingDest, setBookingDest] = useState<Destination | undefined>(undefined);

  const navigate = (screen: TabKey, dest?: Destination) => {
    if (dest) setBookingDest(dest);
    setActiveTab(screen);
  };

  const renderScreen = () => {
    switch (activeTab) {
      case 'home':    return <HomeScreen onNavigate={navigate} />;
      case 'explore': return <ExploreScreen onNavigate={navigate} />;
      case 'booking': return <BookingScreen destination={bookingDest} />;
      case 'profile': return <ProfileScreen />;
      default:        return <HomeScreen onNavigate={navigate} />;
    }
  };

  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" backgroundColor="#0F172A" />
      <View style={styles.screenArea}>{renderScreen()}</View>
      <TabBar active={activeTab} onPress={(tab: TabKey) => setActiveTab(tab)} />
    </View>
  );
}

function LoadingScreen() {
  return (
    <View style={styles.loading}>
      <ActivityIndicator size="large" color="#4F8EF7" />
      <Text style={styles.loadingText}>Loading…</Text>
    </View>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <Suspense fallback={<LoadingScreen />}>
        <AppContent />
      </Suspense>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: '#0F172A' },
  screenArea: { flex: 1 },
  tabBar: {
    flexDirection: 'row',
    backgroundColor: '#1E293B',
    borderTopWidth: 1,
    borderTopColor: 'rgba(255,255,255,0.06)',
    paddingTop: 10,
    paddingHorizontal: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 16,
  },
  tabItem: { flex: 1, alignItems: 'center', gap: 4 },
  tabIconWrap: {
    width: 42, height: 32, borderRadius: 12,
    justifyContent: 'center', alignItems: 'center',
  },
  tabIconWrapActive: { backgroundColor: 'rgba(79,142,247,0.18)' },
  tabIcon: { fontSize: 18 },
  tabLabel: { fontSize: 10, color: '#475569', fontWeight: '600' },
  tabLabelActive: { color: '#4F8EF7' },
  loading: { flex: 1, backgroundColor: '#0F172A', justifyContent: 'center', alignItems: 'center', gap: 12 },
  loadingText: { color: '#64748B', fontSize: 14 },
});
