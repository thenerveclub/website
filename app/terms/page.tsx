import React from 'react';

const TermsOfUse: React.FC = () => {
	return (
		<div className="max-w-3xl mx-auto p-6 text-white">
			<h1 className="text-3xl font-bold text-center mb-6">TERMS OF USE</h1>
			<p className="text-gray-600 text-center mb-4">Effective December 21, 2022</p>

			<section className="mb-6">
				<p className="mb-4">
					These Terms of Service (<strong>&ldquo;Terms&rdquo;</strong> or this <strong>&ldquo;Agreement&rdquo;</strong>) govern your access to and use
					of Hydrogen Labs (the <strong>Site</strong>, located at
					<a href="https://hydrogenlabs.xyz" className="text-blue-500 underline">
						{' '}
						https://hydrogenlabs.xyz
					</a>
					), made available by Hydrogen Labs, Inc. (<strong>&ldquo;we&rdquo;</strong>, <strong>&ldquo;us&rdquo;</strong>, and{' '}
					<strong>&ldquo;Hydrogen Labs&rdquo;</strong>).
				</p>
				<p>
					By accessing or using the Site, you acknowledge that you have read and understand these Terms. You agree to be bound by these Terms and all
					terms, policies, and guidelines incorporated by reference herein. If you do not agree with these Terms, you may not access or use the Site.
				</p>
			</section>

			<section className="mb-6">
				<h2 className="text-xl font-bold">1. Changes to These Terms</h2>
				<p>
					Hydrogen Labs reserves the right, in its sole discretion, to change, modify, replace, add, or suspend portions of these Terms and our
					Privacy Policy at any time by posting amended terms on the Site. If you continue to access the Site after the amended Terms are posted, you
					will be deemed to have accepted such terms through your continued use of the Site. If at any point you do not agree with the Terms or
					Privacy Policy, your license to use the Site shall immediately terminate, and you must stop using the Site.
				</p>
			</section>

			<section className="mb-6">
				<h2 className="text-xl font-bold">2. Privacy Policy</h2>
				<p>
					&quot;Personal Information&quot; means information that identifies, relates to, describes, is reasonably capable of being associated with,
					or could reasonably be linked, directly or indirectly, with a particular consumer or household. By accessing the Site and submitting your
					Personal Information, you consent to the collection, use, transmission, and disclosure of your Personal Information in accordance with our
					<a href="/privacy-policy" className="text-blue-500 underline">
						Privacy Policy
					</a>
					.
				</p>
			</section>

			<section className="mb-6">
				<h2 className="text-xl font-bold">3. Accounts</h2>
				<p>You may browse the Site without registering for an account or providing us with your Personal Information.</p>
			</section>

			<section className="mb-6">
				<h2 className="text-xl font-bold">4. Intellectual Property Ownership and License</h2>
				<p>
					The Site and its entire contents, features, and functionality are owned by us or our licensors and are protected by intellectual property
					rights, including copyright, trademark, and patent laws. Hydrogen Labs retains all rights, title, and interests in the Site. You are granted
					a non-exclusive, non-transferable, revocable license to use the Site as outlined in these Terms.
				</p>
			</section>

			<section className="mb-6">
				<h2 className="text-xl font-bold">5. Site Feedback and Reviews</h2>
				<p>
					You grant Hydrogen Labs a worldwide, perpetual, irrevocable, royalty-free license to use and incorporate into the Site any feedback,
					enhancement requests, recommendations, or reviews that you provide.
				</p>
			</section>

			<section className="mb-6">
				<h2 className="text-xl font-bold">6. Third-Party Software</h2>
				<p>
					The Site may contain third-party software subject to its own licenses and terms. These licenses are incorporated into these Terms by
					reference.
				</p>
			</section>

			<section className="mb-6">
				<h2 className="text-xl font-bold">7. Disclaimer of Warranties</h2>
				<p>
					The Site is provided on an &ldquo;as is&rdquo; basis without any warranties or conditions of any kind. Hydrogen Labs does not guarantee the
					accuracy, reliability, or availability of the Site and its contents.
				</p>
			</section>

			<section className="mb-6">
				<h2 className="text-xl font-bold">8. Security of the Site</h2>
				<p>
					Hydrogen Labs implements security measures to protect your Personal Information. However, we cannot guarantee the absolute security of any
					transmitted data. Any transmission is at your own risk.
				</p>
			</section>

			<section className="mb-6">
				<h2 className="text-xl font-bold">9. Modification of Site</h2>
				<p>Hydrogen Labs may change, suspend, or discontinue any aspect of the Site at any time, with or without notice.</p>
			</section>

			<section className="mb-64">
				<h2 className="text-xl font-bold">10. Governing Law</h2>
				<p>
					These Terms and your use of the Site are governed by the laws of the State of Delaware, without regard to its conflict of law principles.
				</p>
			</section>
		</div>
	);
};

export default TermsOfUse;
