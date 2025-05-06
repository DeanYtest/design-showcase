// app/layout.tsx
-import './globals.css'
+import './globals.css'

 export default function RootLayout({
   children,
 }: {
   children: React.ReactNode
 }) {
-  return (
-    <html lang="zh-Hant">
-      <body>{children}</body>
-    </html>
-  )
+  return (
+    <html lang="zh-Hant">
+      {/* 全站黑底白字 */}
+      <body className="bg-black text-white antialiased">
+        {children}
+      </body>
+    </html>
+  )
 }
