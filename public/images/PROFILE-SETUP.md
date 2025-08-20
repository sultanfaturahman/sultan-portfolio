# 📸 Profile Image Setup Guide

## 🎯 Required Images

### 1. Header Profile Image
- **File:** `profile.png`
- **Location:** `/public/images/profile.png`
- **Requirements:**
  - ✅ **Transparent background (PNG format)**
  - ✅ Square aspect ratio (1:1)
  - ✅ Recommended size: 200x200px or higher
  - ✅ Face should be centered
  - ✅ Professional headshot style

### 2. About Section Profile Image  
- **File:** `profile.png` (same file used for both)
- **Location:** `/public/images/profile.png`
- **Requirements:**
  - ✅ **Transparent background (PNG format)**
  - ✅ Can be full body or headshot
  - ✅ Recommended size: 400x400px or higher
  - ✅ High quality and professional

## 🛠️ How to Create Transparent Background

### Option 1: Online Tools (Recommended)
1. **Remove.bg** - https://www.remove.bg/
   - Upload your photo
   - Automatically removes background
   - Download PNG with transparent background

2. **Canva Background Remover**
   - Upload to Canva
   - Use "Background Remover" tool
   - Download as PNG

### Option 2: Photoshop/GIMP
1. Open your photo
2. Use "Magic Wand" or "Select Subject" tool
3. Invert selection to select background
4. Delete background
5. Export as PNG with transparency

## 📁 File Structure
```
public/
├── images/
│   ├── profile.png          ← Main profile image (transparent)
│   └── profile/
│       └── sultan-profile.jpg ← Fallback image
```

## 🔄 Fallback System
- If `profile.png` is not found, system will use fallback images
- Header: Shows "P" letter with gradient background
- About: Shows `sultan-profile.jpg` with rounded corners

## ✅ Testing
1. Add your `profile.png` to `/public/images/`
2. Refresh the website
3. Check header logo and About section
4. Verify transparent background works correctly

## 📝 Notes
- PNG format is required for transparency
- JPG format will not support transparent backgrounds
- Keep file size under 500KB for optimal loading
- Test on different background colors to ensure transparency works
