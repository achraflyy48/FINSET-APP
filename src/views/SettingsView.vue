<script setup>
import { ref } from 'vue'
import {
  User,
  Sliders,
  Bell,
  Shield,
  Camera,
  Download,
  AlertTriangle,
  LogOut,
} from 'lucide-vue-next'

// State untuk Tab Aktif
const activeTab = ref('profile')

// Data Konfigurasi Tab Menu
const tabs = [
  { id: 'profile', label: 'My Profile', icon: User },
  { id: 'preferences', label: 'Preferences', icon: Sliders },
  { id: 'notifications', label: 'Notifications', icon: Bell },
  { id: 'security', label: 'Data & Security', icon: Shield },
]

// Mock State Data
const profileForm = ref({
  name: 'Alexandre',
  email: 'alexandre@example.com',
})

const notifSettings = ref({
  budgetAlerts: true,
  goalReminders: true,
  weeklyReports: false,
})
</script>
