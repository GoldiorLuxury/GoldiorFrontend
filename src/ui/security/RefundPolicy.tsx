import React from 'react';
import Navbar from '../general/Navbar';
import Footer from '../general/Footer';

const RefundPolicy: React.FC = () => {
    return (
        <>
            <Navbar />
            <div className="max-w-5xl mx-auto p-6 bg-transparent font-inter text-gray-800 mt-24">
                <h1 className="text-5xl font-semibold text-center mb-6">Refund Policy</h1>

                <p className="text-lg mb-6">
                    At Goldior Luxury, customer satisfaction is our top priority. If you are not entirely satisfied with your purchase, we're here to help. Please review our refund policy below:
                </p>

                <section>
                    <h2 className="text-2xl font-semibold mb-3">1. Eligibility for Refunds</h2>
                    <ul className="list-disc list-inside text-lg pl-4 space-y-2">
                        <li>We accept returns and offer refunds on unused and unopened items only.</li>
                        <li>The product must be in its original packaging, and the tamper-proof seal should be intact.</li>
                        <li>Refunds are only applicable for purchases made through our official website.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-3 mt-6">2. Non-Refundable Items</h2>
                    <ul className="list-disc list-inside text-lg pl-4 space-y-2">
                        <li>We cannot offer refunds for opened or used perfumes, due to health and hygiene reasons.</li>
                        <li>Gift cards, personalized/custom items, or sale items are not eligible for refunds.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-3 mt-6">3. Return Process</h2>
                    <ul className="list-disc list-inside text-lg pl-4 space-y-2">
                        <li>To initiate a return, please contact our customer service team within 7 days of receiving your order.</li>
                        <li>You must provide your order number, proof of purchase, and a description of the issue.</li>
                        <li>Returns must be shipped back within 15 days from the date of delivery.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-3 mt-6">4. Return Shipping</h2>
                    <ul className="list-disc list-inside text-lg pl-4 space-y-2">
                        <li>Customers are responsible for the return shipping costs.</li>
                        <li>We recommend using a trackable shipping method to ensure your return reaches us safely.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-3 mt-6">5. Processing Refunds</h2>
                    <ul className="list-disc list-inside text-lg pl-4 space-y-2">
                        <li>Once we receive and inspect the returned item, we will notify you of the approval or rejection of your refund.</li>
                        <li>If approved, your refund will be processed within 10-15 business days. The credit will be applied to your original method of payment.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-3 mt-6">6. Exchanges</h2>
                    <p className="text-lg">We do not offer direct exchanges. If you would like a different product, please return the original item for a refund and place a new order.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-3 mt-6">7. Damaged or Defective Products</h2>
                    <p className="text-lg">If you receive a damaged or defective product, please notify us within 48 hours of delivery. We will arrange for a replacement or refund at no extra cost.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-3 mt-6">8. Late or Missing Refunds</h2>
                    <ul className="list-disc list-inside text-lg pl-4 space-y-2">
                        <li>If you haven't received a refund yet, please check with your bank or credit card provider, as processing times may vary.</li>
                        <li>If you still have not received your refund after 15 days, please contact our customer support team.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-3 mt-6">9. Contact Us</h2>
                    <p className="text-lg">For any questions regarding our refund policy, please reach out to us at:</p>
                    <ul className="list-none text-lg space-y-2 mt-2">
                        <li><strong>Email:</strong> [Your email address]</li>
                        <li><strong>Phone:</strong> [Your phone number]</li>
                    </ul>
                </section>
            </div>
            <Footer />
        </>
    );
};

export default RefundPolicy;
