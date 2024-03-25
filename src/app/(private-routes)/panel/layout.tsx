import { SideBar } from '@/components/_ui/SideBar'

export default function PrivateLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <div className="flex flex-row">
        <aside className="hidden flex-1 border-r-2 border-blue-900 lg:block">
          <SideBar />
        </aside>
        <main className="min-h-screen w-screen sm:p-4">{children}</main>
      </div>
    </>
  )
}
