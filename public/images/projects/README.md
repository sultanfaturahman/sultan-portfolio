# Project Screenshots Guide

## 📸 Cara Menambahkan Screenshot Website

Untuk mengganti logo `<>` dengan screenshot website sesungguhnya, ikuti langkah berikut:

### 1. Ambil Screenshot Website
- Buka website Anda di browser
- Gunakan tools seperti:
  - **Browser DevTools**: F12 → Device simulation untuk responsive
  - **Online Tools**: screenshotapi.net, htmlcsstoimage.com
  - **Manual**: Screenshot full page dengan ekstensi browser

### 2. Optimasi Gambar
- **Format**: JPG atau PNG
- **Ukuran**: 1200x800px (rasio 3:2) untuk kualitas terbaik
- **File size**: < 500KB untuk loading yang cepat
- **Nama file**: gunakan nama yang sudah ditentukan

### 3. Nama File yang Diperlukan
Simpan screenshot dengan nama berikut di folder ini:

```
public/images/projects/
├── theblueeconomist.jpg     # Screenshot The Blue Economist
├── maritimmuda.jpg          # Screenshot Maritim Muda Indonesia  
└── teeliteclub.jpg          # Screenshot Tee Elite Club
```

### 4. Tips Screenshot yang Baik
- **Tampilkan homepage**: Bagian paling menarik dari website
- **Clean view**: Tanpa scroll bar atau UI browser
- **High quality**: Resolusi tinggi untuk tampilan crisp
- **Responsive**: Ambil dari desktop view untuk konsistensi

### 5. Fallback System
Jika gambar tidak ditemukan, sistem akan otomatis menampilkan:
- Logo `<>` dengan animasi sebagai fallback
- Loading state yang smooth
- Error handling yang baik

### 6. Format Alternatif
Jika ingin menggunakan format lain:
- Edit file `src/components/Projects.tsx`
- Ubah path di array `projects`
- Sesuaikan nama file dengan screenshot Anda

## 🎯 Hasil yang Diharapkan
Setelah menambahkan gambar:
- ✅ Screenshot website akan tampil di portfolio
- ✅ Hover effect "View Project" akan muncul
- ✅ Loading animation yang smooth
- ✅ Fallback ke logo `<>` jika gambar gagal load

## 🔧 Testing
Setelah menambah gambar:
1. `npm start` - jalankan development server
2. Scroll ke bagian Projects
3. Pastikan gambar ter-load dengan baik
4. Test hover effects dan responsiveness

---

**Note**: Gambar akan otomatis ter-optimize oleh React untuk performa terbaik!
