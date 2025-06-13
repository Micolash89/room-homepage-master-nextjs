import { ItemArr } from "@/lib/definitions";

export default function Main() {

  const itemsArr:ItemArr[]=[{
    title:"Discover innovative ways to decorate",
    description:"We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
    url:"/assents/images/desktop/image-hero.jpg"
  },{
    title: "We are available all across the globe",
    description: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
    url:"/assents/images/desktop/image-hero.jpg"
  },
  {
    title: "Manufactured with the best materials",
    description: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
    url:"/assents/images/desktop/image-hero.jpg"
  },
]

  return (
    <>
      <main>
        {/* <section> */}

        {/* <div>
    <div>
        <Image src="/assents/images/desktop/image-hero.jpg" alt="hero" width={500} height={500}/>
    </div>
    <h2>

  Discover innovative ways to decorate
    </h2>
    <p>

  We provide unmatched quality, comfort, and style for property owners across the country. 
  Our experts combine form and function in bringing your vision to life. Create a room in your 
  own style with our collection and make your property a reflection of you and what you love.

    </p>
    <a href="#">

  Shop now
    </a>
</div>

</section>

  We are available all across the globe

  With stores all over the world, it &apos s easy for you to find furniture for your home or place of business. 
  Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
  store locator. Any questions? Don &apos t hesitate to contact us today.

  Shop now

  Manufactured with the best materials

  Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
  to ensure that every product is made as perfect and as consistent as possible. With three decades of 
  experience in this industry, we understand what customers want for their home and office.

  Shop now */}

        {/* <section>
          <h3>About our furniture</h3>
          <p>
            Our multifunctional collection blends design and function to suit
            your individual taste. Make each room unique, or pick a cohesive
            theme that best express your interests and what inspires you. Find
            the furniture pieces you need, from traditional to contemporary
            styles or anything in between. Product specialists are available to
            help you create your dream space.
          </p>
        </section> */}
      </main>
    </>
  );
}
