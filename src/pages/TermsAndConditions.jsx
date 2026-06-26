import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const TermsAndConditions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-20 min-h-screen">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass rounded-3xl p-8 md:p-12 max-w-4xl mx-auto"
        >
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-teal-400 mb-2">
            Payment Gateway Terms & Conditions
          </h1>
          <p className="text-slate-400 text-sm mb-8 border-b border-white/10 pb-4">
            Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
          
          <div className="prose prose-invert prose-lg max-w-none 
                        prose-headings:font-serif prose-headings:text-teal-400 
                        prose-h2:text-2xl prose-h2:mb-4 prose-h2:mt-8 
                        prose-p:text-slate-300 prose-p:leading-relaxed prose-p:mb-4
                        prose-li:text-slate-300 prose-li:mb-2">
            
            <p>
              Welcome to <strong>thecns.online</strong> (the "Website"). These Payment Gateway Terms and Conditions ("Payment Terms") govern all payments, transactions, and financial interactions processed through our platform. By initiating a payment or booking a consultation on this Website, you agree to be bound by these Payment Terms, in addition to our main Terms of Service and Privacy Policy.
            </p>
            
            <p>
              Please read these terms carefully before making any payment. If you do not agree with any part of these terms, you must not proceed with your transaction.
            </p>

            <h2>1. Payment Methods & Processing</h2>
            <ul>
              <li>We accept payments through secure, authorized third-party payment gateways.</li>
              <li>By providing your payment information, you authorize our third-party payment processors to charge the designated amount to your chosen payment method.</li>
              <li>You represent and warrant that you have the legal right to use any payment method utilized in connection with your transaction.</li>
            </ul>

            <h2>2. Consultation Fees & Pricing</h2>
            <ul>
              <li>All fees for consultations, appointments, or services listed on the Website are stated in Indian Rupee (INR).</li>
              <li>We reserve the right to change our consulting fees at any time. However, any price changes will not affect bookings that have already been confirmed and paid for.</li>
            </ul>

            <h2>3. Non-Refundable Fee Policy</h2>
            <p>
              <strong>Strict No-Refund Rule:</strong> All consultation fees paid through the Website are 100% non-refundable.
            </p>
            <p>
              Once a payment is processed and a consultation slot is booked, you acknowledge and agree that the fee is locked in to secure the consultant’s time, administrative costs, and resource allocation. No refunds will be issued for cancellations, change of mind, or dissatisfaction with the consultation outcome.
            </p>
            <p>
              <strong>Rescheduling:</strong> If you need to reschedule your appointment, you must do so at least 48 hours prior to your scheduled time. Rescheduling is subject to availability and scheduling capacity. Failure to attend your scheduled consultation without at least 48 hours of advance notice will result in the forfeiture of the entire fee.
            </p>

            <h2>4. Third-Party Payment Security</h2>
            <ul>
              <li>Your payment security is important to us. We do not store or retain your complete credit/debit card numbers or sensitive financial data on our servers.</li>
              <li>All transactions are handled by secure, PCI-DSS compliant payment gateways. We are not responsible for any errors, network failures, or breaches of security that occur on the payment processor’s end.</li>
            </ul>

            <h2>5. Chargebacks and Disputes</h2>
            <ul>
              <li>Because all consultation fees are explicitly non-refundable, initiating an unauthorized chargeback or payment dispute with your bank or card issuer is considered a breach of these terms.</li>
              <li>In the event of a chargeback dispute, <strong>thecns.online</strong> reserves the right to present this agreement and evidence of your booking to your financial institution to resolve the dispute in our favor.</li>
              <li>We reserve the right to suspend or terminate access to our services for any user who initiates an invalid chargeback or dispute.</li>
            </ul>

            <h2>6. Modifications to these Terms</h2>
            <ul>
              <li>We may update these Payment Terms from time to time to reflect changes in our practices, gateway provider updates, or legal requirements.</li>
              <li>Any updates will be posted directly on this page. Your continued use of the Website after changes are posted constitutes your acceptance of the new terms.</li>
            </ul>

            <h2>7. Contact Information</h2>
            <p>
              If you have any questions or encounter any issues regarding your transaction or payment status, please reach out to us directly:
            </p>
            <p className="bg-white/5 p-4 rounded-xl border border-white/10 mt-4 inline-block">
              <strong>Email:</strong> <a href="mailto:support@thecns.online" className="text-teal-400 hover:underline">support@thecns.online</a>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
