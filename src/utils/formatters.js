export const formatRupiah = (number) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    //MENGATUR 0 SUPAYA TIDAK ADA KOMA ,00 DIBELAKANG (CONTOH: Rp. 15.000)
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(number)
}
