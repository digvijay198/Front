# 🚀 Website Setup Instructions

## ✅ Step 1: Add Your Profile Photo

1. Save your profile photo in the project folder (`/Users/digvijaysimkhada/profile-website/`)
2. Name it exactly: `profile.jpg`
   - If your photo has a different name/format, either:
     - Rename it to `profile.jpg`, OR
     - Update line 12 in `script.js` to match your filename (e.g., `'my-photo.png'`)

**Supported formats:** `.jpg`, `.jpeg`, `.png`, `.webp`

---

## ✅ Step 2: Add Your Resume PDF

1. Save your resume PDF in the project folder
2. Update `script.js` line 34:
   ```javascript
   resumeLink: 'resume.pdf', // Change to your actual resume filename
   ```
   OR upload to a cloud service (Google Drive, Dropbox) and use the shareable link

---

## ✅ Step 3: Weather Widget Setup (Optional)

The weather widget requires a free API key from OpenWeatherMap:

1. Visit: https://openweathermap.org/api
2. Sign up for a free account
3. Get your API key from the dashboard
4. Update `script.js` line 26:
   ```javascript
   weatherAPIKey: 'YOUR_ACTUAL_API_KEY_HERE',
   ```

**Note:** Without this, the weather widget will show an error message (but the rest of the site works fine).

---

## ✅ Step 4: Google Maps Setup (Optional)

The maps widget requires a Google Maps API key:

1. Visit: https://console.cloud.google.com/
2. Create a new project (or use existing)
3. Enable "Maps JavaScript API" and "Geocoding API"
4. Create credentials (API Key)
5. Update TWO places:
   - `script.js` line 30:
     ```javascript
     mapsAPIKey: 'YOUR_ACTUAL_API_KEY_HERE',
     ```
   - `index.html` line 269:
     ```html
     <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_ACTUAL_API_KEY_HERE&callback=initMap" async defer></script>
     ```

**Note:** Without this, the map will show a message asking for the API key (but the rest of the site works fine).

---

## ✅ Step 5: Test Your Website

1. Open `index.html` in your web browser
2. Check that:
   - ✅ Your profile photo displays correctly
   - ✅ All your information is correct
   - ✅ Navigation links work
   - ✅ Contact form shows success message when submitted
   - ✅ Chatbot responds to messages
   - ✅ All sections are visible and styled properly

---

## ✅ Step 6: Deploy Your Website (Optional)

### Option A: GitHub Pages (Free & Easy)

1. Create a GitHub repository
2. Upload all your files (index.html, script.js, styles.css, profile.jpg, resume.pdf)
3. Go to Settings → Pages
4. Select your main branch
5. Your site will be live at: `https://yourusername.github.io/repository-name`

### Option B: Netlify (Free & Easy)

1. Visit: https://www.netlify.com/
2. Sign up for free
3. Drag and drop your project folder
4. Your site will be live instantly!

### Option C: Vercel (Free & Easy)

1. Visit: https://vercel.com/
2. Sign up for free
3. Import your GitHub repository or upload files
4. Deploy!

---

## 📝 Quick Checklist

- [ ] Profile photo saved as `profile.jpg` in project folder
- [ ] Resume PDF added and linked in `script.js`
- [ ] Weather API key added (optional)
- [ ] Google Maps API key added (optional)
- [ ] Tested website locally
- [ ] Deployed to hosting service (optional)

---

## 🐛 Troubleshooting

### Profile photo not showing?
- Check the filename matches exactly (case-sensitive)
- Make sure the file is in the same folder as `index.html`
- Check browser console for errors (F12 → Console)

### Resume download not working?
- Make sure the resume file is in the project folder
- Check the filename in `script.js` matches exactly
- Try using a full URL if hosting online

### Weather/Maps not working?
- These are optional features
- The rest of your website works fine without them
- Follow the API setup steps above if you want them

### Contact form not sending emails?
- The form currently shows a success message but doesn't actually send emails
- To enable email sending, you'll need:
  - A backend service (Node.js, PHP, etc.)
  - Or use a service like Formspree, EmailJS, or Netlify Forms

---

## 💡 Additional Customization Ideas

1. **Add GitHub link**: Update the footer in `index.html` with your GitHub profile
2. **Add more projects**: Add more project cards in the Projects section
3. **Customize colors**: Edit CSS variables in `styles.css` (lines 10-16)
4. **Add animations**: Already included, but you can customize them
5. **Add certificates section**: Create a new section for your certificates

---

## 📞 Need Help?

If you encounter any issues:
1. Check the browser console (F12) for errors
2. Verify all file paths are correct
3. Make sure all files are in the same directory
4. Test in different browsers (Chrome, Firefox, Safari)

---

**Your website is ready to go! 🎉**
