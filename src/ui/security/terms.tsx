import React from 'react';
import Navbar from '../general/Navbar';
import Footer from '../general/Footer';

const TermsAndConditions: React.FC = () => {
    return (
        <>
            <Navbar />
            <div className="max-w-5xl mx-auto p-6 bg-white font-inter text-gray-800 mt-24">
                <h1 className="text-5xl font-semibold text-center mb-6">Terms and Conditions</h1>

                <section>
                    <h2 className="text-2xl font-semibold mb-3">1. Introduction</h2>
                    <p className="text-lg">Welcome to Goldior Luxury. These Terms and Conditions govern your use of our website, services, and products, located at [Website URL]. By accessing or using our website, you agree to comply with and be bound by these Terms and Conditions. If you do not agree with these terms, please do not use our website.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-3 mt-6">2. Eligibility</h2>
                    <p className="text-lg">You must be at least 16 years old to use our website and make purchases. By using our website, you represent and warrant that you are of legal age and have the authority to enter into a binding contract.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-3 mt-6">3. Product Information</h2>
                    <p className="text-lg">We strive to ensure that all product descriptions, images, and prices on our website are accurate. However, errors may occur, and we reserve the right to correct any inaccuracies, update information, or modify pricing at any time without prior notice.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-3 mt-6">4. Orders and Payments</h2>
                    <ul className="list-disc list-inside text-lg pl-4 space-y-2">
                        <li><strong>Order Acceptance:</strong> All orders placed through our website are subject to acceptance. We reserve the right to refuse or cancel orders at our discretion.</li>
                        <li><strong>Payment:</strong> We accept COD, debit and credit card, and UPI payments. Payment must be received before we process your order.</li>
                        <li><strong>Pricing:</strong> All prices listed on the website are in INR and include applicable taxes unless stated otherwise. Shipping charges are not included in the product price and will be calculated at checkout.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-3 mt-6">5. Shipping and Delivery</h2>
                    <ul className="list-disc list-inside text-lg pl-4 space-y-2">
                        <li><strong>Shipping Locations:</strong> We offer shipping all over India.</li>
                        <li><strong>Delivery Time:</strong> Estimated delivery times will be provided at checkout. Please note that delivery times may vary due to factors beyond our control, such as customs delays or courier issues.</li>
                        <li><strong>Shipping Fees:</strong> Shipping fees are calculated based on your location and the weight of the order.</li>
                        <li><strong>Lost/Damaged Items:</strong> We are not responsible for lost or damaged items once they are handed over to the courier. If your package is lost or damaged, please contact the courier service directly.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-3 mt-6">6. Returns and Refunds</h2>
                    <ul className="list-disc list-inside text-lg pl-4 space-y-2">
                        <li><strong>Eligibility:</strong> You may return unopened, unused products within 7 days of receiving your order for a full refund or exchange, excluding shipping costs.</li>
                        <li><strong>Process:</strong> To initiate a return, please contact our customer service at <a href="mailto:info@goldiorluxury.com" className="text-blue-500 hover:underline">info@goldiorluxury.com</a>. Products must be returned in their original packaging, and you are responsible for return shipping costs.</li>
                        <li><strong>Non-Returnable Items:</strong> Certain products, such as custom or personalized orders, cannot be returned unless there is a defect.</li>
                        <li><strong>Refunds:</strong> Refunds will be issued to the original payment method once we receive and inspect the returned products.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-3 mt-6">7. Intellectual Property</h2>
                    <p className="text-lg">All content on this website, including but not limited to text, images, graphics, logos, and designs, is the property of Goldior Luxury or its licensors and is protected by copyright and trademark laws. You may not reproduce, distribute, or use any content without our express written permission.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-3 mt-6">8. User Accounts</h2>
                    <p className="text-lg">To access certain features of our website, you may be required to create an account. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-3 mt-6">9. Privacy Policy</h2>
                    <p className="text-lg">Your use of our website is also governed by our Privacy Policy. Please review the Privacy Policy to understand our practices regarding collecting and using your personal information.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-3 mt-6">10. Limitation of Liability</h2>
                    <p className="text-lg">We are not liable for any direct, indirect, incidental, or consequential damages arising from your use of our website, products, or services. This includes, but is not limited to, damages for loss of profits, goodwill, data, or other intangible losses.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-3 mt-6">11. Dispute Resolution</h2>
                    <p className="text-lg">Any disputes arising from or in connection with these Terms and Conditions shall be resolved through negotiation.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-3 mt-6">12. Governing Law</h2>
                    <p className="text-lg">These Terms and Conditions are governed by and construed per the laws of India, without regard to its conflict of law principles.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-3 mt-6">13. Changes to Terms</h2>
                    <p className="text-lg">We reserve the right to update or modify these Terms and Conditions without prior notice. Any changes will be posted on this page, and your continued use of the website constitutes acceptance of the revised terms.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-3 mt-6">14. Contact Information</h2>
                    <p className="text-lg">For any questions or concerns regarding these Terms and Conditions, please contact us at:</p>
                    <ul className="list-none text-lg space-y-2 mt-2">
                        <li><strong>Email:</strong> [Your email address]</li>
                        <li><strong>Phone:</strong> [Your phone number]</li>
                        <li><strong>Address:</strong> [Your physical address]</li>
                    </ul>
                </section>
            </div>
            <Footer />
        </>
    );
};

export default TermsAndConditions;
