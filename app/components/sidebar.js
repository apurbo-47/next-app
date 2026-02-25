export default function Sidebar() {
  return (
    <aside className="sticky top-10 space-y-8">
      {/* Table of Contents */}
      <div className=" rounded-xl p-6">
        <h3 className="font-bold text-xl mb-8">Table of Contents</h3>
        <ul className="space-y-3 text-sm text-gray-600">
          <li className="hover:text-black cursor-pointer">
            Making Learning More Interactive
          </li>
          <li className="hover:text-black cursor-pointer">
            Improving Teacher–Student Engagement
          </li>
          <li className="hover:text-black cursor-pointer">
            Access to a World of Learning Resources
          </li>
        </ul>
      </div>

      {/* Newsletter */}
      <div className="border border-white bg-[#F5F7FA] rounded-4xl p-6">
        <h3 className="font-semibold text-2xl mb-4">
          Stay Updated With School News!
        </h3>
        <p className="text-sm text-gray-600 mb-20">
          Receive school updates, events, announcements, and important notices
          directly in your inbox.
        </p>

        <div className="flex items-center border rounded-lg overflow-hidden">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 text-sm outline-none"
          />
          <button className="bg-black text-white px-4 py-2">→</button>
        </div>
      </div>
    </aside>
  );
}
