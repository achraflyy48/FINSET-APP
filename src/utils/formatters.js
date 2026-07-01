// src/utils/formatters.js
export const formatRupiah = (number) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    // Kita set 0 agar tidak ada koma ,00 di belakang (contoh: Rp 15.000)
    // agar UI tetap bersih dan tidak overflow di layar kecil.
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(number)
}
