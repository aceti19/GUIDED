import clsx from 'clsx';

export default function InvoiceStatus({ status }: { status: string }) {
  // Fungsi ini menghasilkan string className yang sesuai dengan status
  const statusClassName = clsx(
    'inline-flex items-center rounded-full px-2 py-1 text-sm font-semibold', // Font-semibold untuk teks lebih bold
    {
      'bg-gray-100 text-gray-800': status === 'pending', // Mengganti text-gray-500 ke text-gray-800 untuk kontras lebih tinggi
      'bg-green-500 text-white': status === 'paid',
      'bg-red-500 text-white': status === 'overdue', // Menambahkan status 'overdue'
      'bg-yellow-500 text-white': status === 'in process', // Menambahkan status 'in process'
      // Tambahkan kondisi untuk status lain yang mungkin ada
    }
  );

  return (
    <span className={statusClassName}>
      {status.charAt(0).toUpperCase() + status.slice(1)} {/* Capitalize the first letter of status */}
    </span>
  );
}
