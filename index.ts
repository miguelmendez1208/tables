/**
 * v0 by Vercel.
 * @see https://v0.dev/t/MC5reZ9V8zg
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function Component() {
    return (
      <div className="bg-gray-50/90 w-full min-h-screen py-12 sm:py-16">
        <div className="container px-4 py-12 md:py-16">
          <div className="flex flex-col gap-4">
            <div className="mx-auto grid w-full gap-4 sm:gap-6 items-start">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl xl:text-5xl">Company Scores</h1>
              <div className="w-full overflow-auto rounded-lg border">
                <table className="min-w-full">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-800">
                      <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider w-1/2 sm:text-base dark:text-gray-400">
                        Company
                      </th>
                      <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider w-1/2 sm:text-base dark:text-gray-400">
                        Score
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-gray-100 dark:hover:bg-gray-800">
                      <td className="px-6 py-4 whitespace-nowrap">Acme Corporation</td>
                      <td className="px-6 py-4 whitespace-nowrap">96</td>
                    </tr>
                    <tr className="hover:bg-gray-100 dark:hover:bg-gray-800">
                      <td className="px-6 py-4 whitespace-nowrap">Example Corp</td>
                      <td className="px-6 py-4 whitespace-nowrap">84</td>
                    </tr>
                    <tr className="hover:bg-gray-100 dark:hover:bg-gray-800">
                      <td className="px-6 py-4 whitespace-nowrap">Mock Industries</td>
                      <td className="px-6 py-4 whitespace-nowrap">78</td>
                    </tr>
                    <tr className="hover:bg-gray-100 dark:hover:bg-gray-800">
                      <td className="px-6 py-4 whitespace-nowrap">Test Co.</td>
                      <td className="px-6 py-4 whitespace-nowrap">91</td>
                    </tr>
                    <tr className="hover:bg-gray-100 dark:hover:bg-gray-800">
                      <td className="px-6 py-4 whitespace-nowrap">Sample Ltd.</td>
                      <td className="px-6 py-4 whitespace-nowrap">89</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  