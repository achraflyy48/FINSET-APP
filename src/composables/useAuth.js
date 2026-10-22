import { ref } from 'vue'
import { supabase } from '../supabase'

const user = ref(null)
const loading = ref(false)
const errorMessage = ref(null)

export function useAuth() {
  // Fungsi Pendaftaran Akun (Sign Up)
  const signUp = async (email, password) => {
    loading.value = true
    errorMessage.value = null
    try {
      const { data, error } = await supabase.auth.signUp({ email, password })
      if (error) throw error
      return data
    } catch (error) {
      errorMessage.value = error.message
      throw error
    } finally {
      loading.value = false
    }
  }

  // Fungsi Masuk Akun (Sign In)
  const signIn = async (email, password) => {
    loading.value = true
    errorMessage.value = null
    try {
      const { data, error } = await supabase.auth.signInWithPassword({ email, password })
      if (error) throw error
      user.value = data.user

      //Catat waktu login pengguna saat ini
      localStorage.setItem('finset_last_active', new Date().getTime().toString())

      return data
    } catch (error) {
      errorMessage.value = error.message
      throw error
    } finally {
      loading.value = false
    }
  }

  // Fungsi Keluar (Sign Out)
  const signOut = async () => {
    loading.value = true
    try {
      const { error } = await supabase.auth.signOut()
      if (error) throw error
      user.value = null

      // Hapus waktu login pengguna saat logout
      localStorage.removeItem('finset_last_active')
    } catch (error) {
      errorMessage.value = error.message
      throw error
    } finally {
      loading.value = false
    }
  }

  // Pengecekan Sesi Pengguna Aktif
  const fetchUser = async () => {
    const {
      data: { session },
    } = await supabase.auth.getSession()
    user.value = session?.user || null
  }

  return {
    user,
    loading,
    errorMessage,
    signUp,
    signIn,
    signOut,
    fetchUser,
  }
}
