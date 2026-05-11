# 📝 Todo App

React, TypeScript ve Capacitor.js ile geliştirilmiş, iOS ve Android'de çalışan cross-platform bir yapılacaklar listesi uygulaması.

---

## 🚀 Özellikler

- ✅ Görev ekleme, başlatma ve tamamlama
- 🔄 Üç aşamalı görev yönetimi: **Yapılacaklar → Devam Edenler → Tamamlananlar**
- 💾 Kalıcı depolama — Capacitor Preferences ile veriler uygulama kapatılsa bile korunur
- 📱 iOS ve Android desteği (Capacitor.js)
- 🌐 Web tarayıcısında da çalışır
- 🎨 Dark tema arayüz

---

## 🛠 Teknolojiler

| Teknoloji | Açıklama |
|---|---|
| React 18 | UI framework |
| TypeScript | Tip güvenliği |
| Tailwind CSS v4 | Stil |
| Capacitor.js v8 | Native iOS/Android köprüsü |
| Capacitor Preferences | Native kalıcı depolama |
| Vite | Build aracı |

---

## 📁 Klasör Yapısı

```
src/
├── components/
│   ├── Header/
│   │   └── Header.tsx          # Uygulama başlığı ve görev sayacı
│   ├── CreateTodo/
│   │   └── CreateTodo.tsx      # Yeni görev ekleme formu
│   ├── TodoList/
│   │   ├── TodoList.tsx        # Tüm bölümleri listeleyen ana bileşen
│   │   └── TodoSection.tsx     # Tek bir durum grubunu gösteren bölüm
│   └── Button/
│       └── ActionButton.tsx    # Tekrar kullanılabilir aksiyon butonu
├── store/
│   ├── todoContext.tsx          # React Context — global state yönetimi
│   └── todoReducer.ts          # Saf fonksiyon ile state güncellemeleri
├── services/
│   └── store.ts                # Capacitor Preferences ile depolama katmanı
├── types/
│   └── todo.ts                 # TypeScript tipleri ve enum'lar
├── constants/
│   └── constants.ts            # Uygulama genelinde sabitler
├── App.tsx                     # Kök bileşen
└── main.tsx                    # Uygulama giriş noktası
```

---

## 🏗 Mimari

Uygulama **Context + Reducer** pattern'ı kullanır:

```
UI Bileşenleri
     │
     ▼
TodoContext (useTodo hook)
     │
     ├── todoReducer   →  State güncellemeleri (saf fonksiyon)
     │
     └── TodoStorage   →  Capacitor Preferences (kalıcı depolama)
```

### State Yönetimi

- **`todoContext.tsx`** — `useReducer` ile global state, `useMemo` ile türetilmiş listeler
- **`todoReducer.ts`** — `INITIALIZE`, `ADD_TODO`, `UPDATE_STATUS` aksiyonları
- **`store.ts`** — `getTodos`, `saveTodos`, `removeCache` metodları

### Enum'lar (`types/todo.ts`)

```ts
TodoStatus      // todo | in_progress | done
SectionTitles   // Bölüm başlıkları
TitleColor      // Tailwind renk sınıfları
TodoStatusLabel // Buton etiketleri
TodoActionType  // Reducer aksiyon tipleri
```

---

## ⚙️ Kurulum

### Gereksinimler

- Node.js 18+
- Xcode (iOS için)
- Android Studio (Android için)

### Bağımlılıkları Yükle

```bash
npm install
```

### Web'de Çalıştır

```bash
npm run dev
```

### iOS Build

```bash
npm run build
npx cap sync
npx cap open ios
```

Xcode açılınca **Play** butonuna bas.

### Android Build

```bash
npm run build
npx cap sync
npx cap open android
```

Android Studio açılınca **Run** butonuna bas.

---

## 🔄 Geliştirme Akışı

Web'de değişiklik yaptıktan sonra iOS/Android'e yansıtmak için:

```bash
npm run build
npx cap sync
```

---

## 📦 Capacitor Yapılandırması

`capacitor.config.json`:

```json
{
  "appId": "com.hilalezgi.todoapp",
  "appName": "todo-app",
  "webDir": "dist",
  "ios": {
    "minVersion": "14.0"
  }
}
```

---

## 🤝 Katkı Rehberi

1. Bu repoyu fork'la
2. Yeni bir branch oluştur: `git checkout -b feature/ozellik-adi`
3. Değişikliklerini yap ve commit'le: `git commit -m 'feat: yeni özellik'`
4. Branch'ini push'la: `git push origin feature/ozellik-adi`
5. Pull Request aç

### Commit Mesajı Kuralları

```
feat: yeni özellik
fix: hata düzeltme
refactor: kod yeniden düzenleme
style: stil değişikliği
docs: dokümantasyon
```
