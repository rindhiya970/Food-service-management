import React from 'react';
import '../styles/CardSection.css';

/**
 * Testimonials data array
 * Contains user testimonials with quotes, names, roles, and images
 */
const testimonials = [
  {
    quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima dicta amet, molestiae aliquam incidunt suscipit recusandae labore ratione doloremque, architecto et illo minus quo tenetur ducimus, voluptatibus repellendus fuga aperiam vel ab! Ipsam corrupti blanditiis neque eos, vero quas.",
    name: "Gladis ",
    role: "Head of SEO",
    image: "https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80"
  },
  {
    quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio beatae incidunt perferendis soluta facilis voluptas dicta repudiandae quasi voluptatibus libero, animi cumque necessitatibus id odit ad corrupti rem cum natus.",
    name: "Gladis Lennon",
    role: "Head of SEO",
    image: "https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80"
  },
  {
    quote: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi a voluptatum quidem nulla quisquam natus velit provident earum fuga vitae porro, quas magnam voluptatibus id ratione blanditiis atque accusamus dolorum ex iure sit consequuntur? Voluptatem.",
    name: "Gladis Lennon",
    role: "Head of SEO",
    image: "https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80"
  },
  {
    quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima dicta amet, molestiae aliquam incidunt suscipit recusandae labore ratione doloremque.",
    name: "Gladis Lennon",
    role: "Head of SEO",
    image: "https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80"
  },
  {
    quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non perspiciatis eaque repellendus reiciendis ex assumenda, veniam error debitis dolorum commodi iusto quo sapiente expedita minima quasi! Consequuntur unde facere ipsam possimus aut hic quasi.",
    name: "Gladis Lennon",
    role: "Head of SEO",
    image: "https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80"
  },
  {
    quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio beatae incidunt perferendis soluta facilis voluptas dicta repudiandae quasi voluptatibus libero.",
    name: "Gladis Lennon",
    role: "Head of SEO",
    image: "https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80"
  }
];

/**
 * CardSection Component
 * Displays testimonial cards in a responsive grid layout
 */
const CardSection = () => {
  return (
    <section className="card-section">
      <div className="container card-grid">
        {testimonials.map((testimonial, index) => (
          <div className="card" key={index}>
            <div className="card-body">
              <p className="quote">{testimonial.quote}</p>
            </div>
            <div className="card-footer">
              <img src={testimonial.image} alt={testimonial.name} className="avatar" />
              <div className="user-info">
                <h4>{testimonial.name}</h4>
                <p>{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CardSection;
