import Link from "next/link"
import { ChevronRight } from "lucide-react"

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Banner */}
      <div className="relative w-full py-12 md:py-16 bg-gradient-to-r from-nmb-blue to-nmb-darkblue">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        ></div>
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Privacy Policy</h1>
            <div className="flex items-center text-white/70 text-sm">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <ChevronRight className="h-4 w-4 mx-2" />
              <span className="text-white">Privacy Policy</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container px-4 md:px-6 py-12 md:py-16 mx-auto">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8">
          <div className="prose max-w-none">
            <p className="text-gray-500 mb-8">
              Last Updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
            </p>

            <h2 className="text-2xl font-bold text-nmb-blue mb-4">1. Introduction</h2>
            <p className="mb-4">
              Negem Metal Buildings Factory ("we," "our," or "us") respects your privacy and is committed to protecting
              your personal data. This privacy policy will inform you about how we look after your personal data when
              you visit our website and tell you about your privacy rights and how the law protects you.
            </p>
            <p className="mb-6">
              This privacy policy applies to all information collected through our website, as well as any related
              services, sales, marketing, or events.
            </p>

            <h2 className="text-2xl font-bold text-nmb-blue mb-4">2. Information We Collect</h2>
            <p className="mb-4">
              We collect several different types of information for various purposes to provide and improve our service
              to you:
            </p>
            <h3 className="text-xl font-semibold text-nmb-blue mb-3">2.1 Personal Data</h3>
            <p className="mb-4">
              While using our website, we may ask you to provide us with certain personally identifiable information
              that can be used to contact or identify you. This may include, but is not limited to:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Company name</li>
              <li>Address, State, Province, ZIP/Postal code, City</li>
              <li>Cookies and Usage Data</li>
            </ul>

            <h3 className="text-xl font-semibold text-nmb-blue mb-3">2.2 Usage Data</h3>
            <p className="mb-6">
              We may also collect information on how the website is accessed and used. This Usage Data may include
              information such as your computer's Internet Protocol address (e.g., IP address), browser type, browser
              version, the pages of our website that you visit, the time and date of your visit, the time spent on those
              pages, unique device identifiers, and other diagnostic data.
            </p>

            <h2 className="text-2xl font-bold text-nmb-blue mb-4">3. How We Use Your Information</h2>
            <p className="mb-4">Negem Metal Buildings Factory uses the collected data for various purposes:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>To provide and maintain our website</li>
              <li>To notify you about changes to our website</li>
              <li>To allow you to participate in interactive features of our website when you choose to do so</li>
              <li>To provide customer support</li>
              <li>To gather analysis or valuable information so that we can improve our website</li>
              <li>To monitor the usage of our website</li>
              <li>To detect, prevent and address technical issues</li>
              <li>To fulfill any other purpose for which you provide it</li>
              <li>
                To provide you with news, special offers and general information about other goods, services and events
                which we offer
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-nmb-blue mb-4">4. Cookies</h2>
            <p className="mb-4">
              We use cookies and similar tracking technologies to track the activity on our website and hold certain
              information. Cookies are files with a small amount of data which may include an anonymous unique
              identifier.
            </p>
            <p className="mb-6">
              You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However,
              if you do not accept cookies, you may not be able to use some portions of our website.
            </p>

            <h2 className="text-2xl font-bold text-nmb-blue mb-4">5. Data Security</h2>
            <p className="mb-6">
              The security of your data is important to us, but remember that no method of transmission over the
              Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable
              means to protect your Personal Data, we cannot guarantee its absolute security.
            </p>

            <h2 className="text-2xl font-bold text-nmb-blue mb-4">6. Third-Party Services</h2>
            <p className="mb-6">
              We may employ third-party companies and individuals to facilitate our website, provide the website on our
              behalf, perform website-related services, or assist us in analyzing how our website is used. These third
              parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not
              to disclose or use it for any other purpose.
            </p>

            <h2 className="text-2xl font-bold text-nmb-blue mb-4">7. Your Data Protection Rights</h2>
            <p className="mb-4">
              Depending on your location and subject to applicable law, you may have the following rights with respect
              to your personal data:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>The right to access, update or delete the information we have on you</li>
              <li>
                The right of rectification - the right to have your information corrected if it is inaccurate or
                incomplete
              </li>
              <li>The right to object - the right to object to our processing of your Personal Data</li>
              <li>
                The right of restriction - the right to request that we restrict the processing of your personal
                information
              </li>
              <li>
                The right to data portability - the right to be provided with a copy of the information we have on you
                in a structured, machine-readable and commonly used format
              </li>
              <li>
                The right to withdraw consent - the right to withdraw your consent at any time where we relied on your
                consent to process your personal information
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-nmb-blue mb-4">8. Changes to This Privacy Policy</h2>
            <p className="mb-6">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
              Privacy Policy on this page and updating the "Last Updated" date at the top of this Privacy Policy. You
              are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are
              effective when they are posted on this page.
            </p>

            <h2 className="text-2xl font-bold text-nmb-blue mb-4">9. Contact Us</h2>
            <p className="mb-4">If you have any questions about this Privacy Policy, please contact us:</p>
            <ul className="list-none pl-0 mb-6">
              <li>
                <strong>By email:</strong> info@nmb.qa
              </li>
              <li>
                <strong>By phone:</strong> +974 5589 4464
              </li>
              <li>
                <strong>By mail:</strong> Building No.267, Street No:8, New Industrial Area, P.O Box: 16230, Doha, Qatar
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

