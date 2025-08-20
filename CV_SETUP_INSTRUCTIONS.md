# 📄 Instruksi Setup CV Feature

## 🔗 Cara Setup CV dengan Google Drive

### 1. Upload CV ke Google Drive
1. Login ke [Google Drive](https://drive.google.com)
2. Upload file CV Anda (format PDF recommended)
3. Klik kanan pada file CV → **Get link**
4. Pilih **Anyone with the link** → **Viewer**
5. Copy link yang diberikan

### 2. Extract File ID dari Link
Dari link Google Drive seperti:
```
https://drive.google.com/file/d/1ABC123xyz789/view?usp=sharing
```

Ambil bagian ID: `1ABC123xyz789`

### 3. Update File Hero.tsx
Buka file `src/components/Hero.tsx` dan ganti:

```typescript
// Ganti YOUR_GOOGLE_DRIVE_FILE_ID dengan ID yang sudah Anda copy
const cvUrl = "https://drive.google.com/file/d/YOUR_GOOGLE_DRIVE_FILE_ID/view?usp=sharing";
const cvDownloadUrl = "https://drive.google.com/uc?export=download&id=YOUR_GOOGLE_DRIVE_FILE_ID";
```

Dengan:
```typescript
const cvUrl = "https://drive.google.com/file/d/1ABC123xyz789/view?usp=sharing";
const cvDownloadUrl = "https://drive.google.com/uc?export=download&id=1ABC123xyz789";
```

## 🎯 Alternatif Lain untuk Hosting CV

### Option 1: GitHub
1. Upload CV ke repository GitHub
2. Gunakan link raw file
3. Update URL di Hero.tsx

### Option 2: Netlify/Vercel
1. Upload CV ke folder `public/cv/`
2. Update URL menjadi `/cv/your-cv.pdf`

### Option 3: Cloud Storage
- **AWS S3**
- **Cloudinary**
- **Firebase Storage**

## ✅ Test CV Feature
Setelah setup:
1. Run `npm start`
2. Klik tombol **View CV** → harus membuka CV di tab baru
3. Klik **Download CV** → harus download file CV

## 📱 Mobile Optimization
CV feature sudah responsive dan bekerja di semua device.

## 🔧 Troubleshooting
- Jika CV tidak muncul, pastikan link Google Drive sudah public
- Jika download tidak bekerja, coba gunakan hosting alternatif
- Untuk file besar (>10MB), pertimbangkan compress PDF
