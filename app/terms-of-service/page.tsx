import Link from "next/link"
import { ChevronRight } from "lucide-react"

export default function TermsOfServicePage() {
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
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Terms of Service</h1>
            <div className="flex items-center text-white/70 text-sm">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <ChevronRight className="h-4 w-4 mx-2" />
              <span className="text-white">Terms of Service</span>
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
              Welcome to Negem Metal Buildings Factory. These Terms of Service ("Terms") govern your use of our website
              located at www.negemco.com (the "Service") operated by Negem Metal Buildings Factory ("us", "we", or
              "our").
            </p>
            <p className="mb-6">
              By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of
              the terms, then you may not access the Service.
            </p>

            <h2 className="text-2xl font-bold text-nmb-blue mb-4">2. Communications</h2>
            <p className="mb-6">
              By using our Service, you agree to subscribe to newsletters, marketing or promotional materials and other
              information we may send. However, you may opt out of receiving any, or all, of these communications from
              us by following the unsubscribe link or instructions provided in any email we send.
            </p>

            <h2 className="text-2xl font-bold text-nmb-blue mb-4">3. Content</h2>
            <p className="mb-4">
              Our Service allows you to post, link, store, share and otherwise make available certain information, text,
              graphics, videos, or other material ("Content"). You are responsible for the Content that you post on or
              through the Service, including its legality, reliability, and appropriateness.
            </p>
            <p className="mb-4">
              By posting Content on or through the Service, You represent and warrant that: (i) the Content is yours
              (you own it) and/or you have the right to use it and the right to grant us the rights and license as
              provided in these Terms, and (ii) that the posting of your Content on or through the Service does not
              violate the privacy rights, publicity rights, copyrights, contract rights or any other rights of any
              person or entity.
            </p>
            <p className="mb-6">
              We reserve the right to terminate the account of anyone found to be infringing on a copyright.
            </p>

            <h2 className="text-2xl font-bold text-nmb-blue mb-4">4. Intellectual Property</h2>
            <p className="mb-4">
              The Service and its original content (excluding Content provided by users), features and functionality are
              and will remain the exclusive property of Negem Metal Buildings Factory and its licensors. The Service is
              protected by copyright, trademark, and other laws of both Qatar and foreign countries. Our trademarks and
              trade dress may not be used in connection with any product or service without the prior written consent of
              Negem Metal Buildings Factory.
            </p>
            <p className="mb-6">
              When you upload content, you give to Negem Metal Buildings Factory a worldwide, non-exclusive,
              royalty-free, transferable license to use, reproduce, distribute, prepare derivative works of, display,
              and perform that Content in connection with the provision of the Service and otherwise in connection with
              the Service and Negem Metal Buildings Factory's business.
            </p>

            <h2 className="text-2xl font-bold text-nmb-blue mb-4">5. Links To Other Web Sites</h2>
            <p className="mb-4">
              Our Service may contain links to third-party web sites or services that are not owned or controlled by
              Negem Metal Buildings Factory.
            </p>
            <p className="mb-6">
              Negem Metal Buildings Factory has no control over, and assumes no responsibility for, the content, privacy
              policies, or practices of any third party web sites or services. You further acknowledge and agree that
              Negem Metal Buildings Factory shall not be responsible or liable, directly or indirectly, for any damage
              or loss caused or alleged to be caused by or in connection with use of or reliance on any such content,
              goods or services available on or through any such web sites or services.
            </p>

            <h2 className="text-2xl font-bold text-nmb-blue mb-4">6. Termination</h2>
            <p className="mb-4">
              We may terminate or suspend your access to the Service immediately, without prior notice or liability, for
              any reason whatsoever, including without limitation if you breach the Terms.
            </p>
            <p className="mb-6">
              All provisions of the Terms which by their nature should survive termination shall survive termination,
              including, without limitation, ownership provisions, warranty disclaimers, indemnity and limitations of
              liability.
            </p>

            <h2 className="text-2xl font-bold text-nmb-blue mb-4">7. Limitation Of Liability</h2>
            <p className="mb-6">
              In no event shall Negem Metal Buildings Factory, nor its directors, employees, partners, agents,
              suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive
              damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses,
              resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or
              content of any third party on the Service; (iii) any content obtained from the Service; and (iv)
              unauthorized access, use or alteration of your transmissions or content, whether based on warranty,
              contract, tort (including negligence) or any other legal theory, whether or not we have been informed of
              the possibility of such damage, and even if a remedy set forth herein is found to have failed of its
              essential purpose.
            </p>

            <h2 className="text-2xl font-bold text-nmb-blue mb-4">8. Disclaimer</h2>
            <p className="mb-6">
              Your use of the Service is at your sole risk. The Service is provided on an "AS IS" and "AS AVAILABLE"
              basis. The Service is provided without warranties of any kind, whether express or implied, including, but
              not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement
              or course of performance.
            </p>

            <h2 className="text-2xl font-bold text-nmb-blue mb-4">9. Governing Law</h2>
            <p className="mb-6">
              These Terms shall be governed and construed in accordance with the laws of Qatar, without regard to its
              conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be
              considered a waiver of those rights. If any provision of these Terms is held to be invalid or
              unenforceable by a court, the remaining provisions of these Terms will remain in effect.
            </p>

            <h2 className="text-2xl font-bold text-nmb-blue mb-4">10. Changes</h2>
            <p className="mb-6">
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision
              is material we will try to provide at least 30 days notice prior to any new terms taking effect. What
              constitutes a material change will be determined at our sole discretion. By continuing to access or use
              our Service after those revisions become effective, you agree to be bound by the revised terms. If you do
              not agree to the new terms, please stop using the Service.
            </p>

            <h2 className="text-2xl font-bold text-nmb-blue mb-4">11. Contact Us</h2>
            <p className="mb-4">If you have any questions about these Terms, please contact us:</p>
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

