import Sidebar from "../components/sidebar"

export default function Layout({ children }) {
  return (
    <div className="flex justify-between h-screen w-screen">
      <Sidebar />
      <div className="text-black w-full text-center overflow-y-scroll min-h-screen">
        {children}
      </div>
    </div>
  )
}
