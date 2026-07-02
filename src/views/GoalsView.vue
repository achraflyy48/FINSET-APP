<script setup>
import { ref, computed } from 'vue'
import {
  Plus,
  MoreVertical,
  Home,
  Laptop,
  Plane,
  ShieldAlert,
  Clock,
  PlusCircle,
} from 'lucide-vue-next'
import { formatRupiah } from '../utils/formatters'

//DATA SEMENTARA UNTUK DAFTAR GOALS
const goals = ref([
  {
    id: 1,
    title: 'DP Rumah KPR',
    icon: Home,
    saved: 45000000,
    target: 100000000,
    hasDeadline: true,
    deadlineText: 'Dec 2026',
    colorClass: 'text-blue-500',
    bgClass: 'bg-blue-50',
    progressColor: 'bg-blue-500',
  },
  {
    id: 2,
    title: 'MacBook Pro M3',
    icon: Laptop,
    saved: 12000000,
    target: 25000000,
    hasDeadline: false,
    deadlineText: '',
    colorClass: 'text-purple-500',
    bgClass: 'bg-purple-50',
    progressColor: 'bg-purple-500',
  },
  {
    id: 3,
    title: 'Dana Darurat',
    icon: ShieldAlert,
    saved: 15000000,
    target: 30000000,
    hasDeadline: false,
    deadlineText: '',
    colorClass: 'text-green-500',
    bgClass: 'bg-green-50',
    progressColor: 'bg-green-500',
  },
  {
    id: 4,
    title: 'Liburan Jepang',
    icon: Plane,
    saved: 8000000,
    target: 20000000,
    hasDeadline: true,
    deadlineText: 'Oct 2026',
    colorClass: 'text-orange-500',
    bgClass: 'bg-orange-50',
    progressColor: 'bg-orange-500',
  },
])

//COMPUTED PROPERTY UNTUK MENGHITUNG PERSENTASE PROGRESS, TOTAL TERSIMPAN, DAN TOTAL TARGET
const totalSaved = computed(() => goals.value.reduce((sum, goal) => sum + goal.saved, 0))
const totalTarget = computed(() => goals.value.reduce((sum, goal) => sum + goal.target, 0))
</script>
