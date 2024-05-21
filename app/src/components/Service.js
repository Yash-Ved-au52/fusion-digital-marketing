import React from 'react';

const servicesData = [
  {
    title: 'Social Media',
    description: "Engage with your audience on social media platforms and grow your brand's presence. We offer comprehensive social media management services that help you build a strong online community and enhance customer engagement.",
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/fusion-digital-marketing.appspot.com/o/4789176.jpg?alt=media&token=fc4c8324-c07a-4f1f-95a0-b303f46ab1d5', // Image URL
    alt: 'Social Media',
  },
  {
    title: 'Advertisement',
    description: 'Reach your target audience effectively through targeted advertisements. Our advertising strategies are designed to maximize your ROI by targeting the right audience with the right message at the right time.',
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/fusion-digital-marketing.appspot.com/o/19197114.jpg?alt=media&token=a95de9d1-9661-4779-9512-a65e3b3bf23a', // Image URL
    alt: 'Advertisement',
  },
  {
    title: 'Website Designing & Development',
    description: 'Create a stunning website that reflects your brand and captivates your audience. Our web design and development services ensure your site is visually appealing, user-friendly, and optimized for performance.',
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/fusion-digital-marketing.appspot.com/o/6055621.jpg?alt=media&token=98ddc07d-b366-4a72-9bf0-f8981c9d794a', // Image URL
    alt: 'Website Designing',
  },
  {
    title: 'Event Management',
    description: 'Plan and execute successful events that leave a lasting impression on your audience. We provide end-to-end event management services to ensure your events are memorable and impactful.',
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/fusion-digital-marketing.appspot.com/o/19197138.jpg?alt=media&token=1e58a827-b4dd-477f-b638-0299bda5d867', // Image URL
    alt: 'Event Management',
  },
  {
    title: 'Influencer Marketing',
    description: 'Leverage the power of influencers to promote your brand and reach a wider audience. We connect you with top influencers who can authentically promote your products and boost your brand visibility.',
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/fusion-digital-marketing.appspot.com/o/4309867.jpg?alt=media&token=36a30c0d-63d1-4975-bd38-af908d31e4e8', // Image URL
    alt: 'Influencer Marketing',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h4 className="text-3xl font-bold text-gray-900">Our Services</h4>
          <p className="mt-4 text-lg text-gray-600">
            We offer a range of digital marketing services tailored to meet your business needs.
          </p>
        </div>
        <div className="flex flex-col space-y-8">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center hover:shadow-xl transition-shadow duration-300"
            >
              <img
                className="w-full md:w-1/3 h-64 object-cover rounded-md mb-6 md:mb-0 md:mr-6"
                src={service.imageUrl}
                alt={service.alt}
              />
              <div className="w-full md:w-2/3">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-700">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
