import Image from 'next/image';
import HappyCoco from '../../assets/images/happy-coco.8907ee78.webp';

export default function Login() {
  return (
    <main className="default-background min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full flex flex-col items-center space-y-8 p-8 bg-white shadow-lg rounded-md">

        <Image src={HappyCoco} alt="Happy Coco Logo" width={100} height={50} />

        <h2 className="text-3xl font-extrabold text-center text-gray-800">Login</h2>
        <form method="post" action="/api/auth/callback/credentials" className="mt-8 space-y-6">
          <div>
            <label htmlFor="username" className="sr-only">
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              autoComplete="username"
              required
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
              placeholder="Username"
            />
          </div>
          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              autoComplete="current-password"
              required
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm mt-2"
              placeholder="Password"
            />
          </div>
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
