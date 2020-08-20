import React from "react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <section _ngcontent-vkq-c282>
      <section _ngcontent-vkq-c282 className="hero hero--small">
        <div _ngcontent-vkq-c282 className="hero__logo" />
        <div _ngcontent-vkq-c282 className="hero__slogan">
          {" "}
          The Home of Fantasy Sports{" "}
        </div>
      </section>
      <section
        _ngcontent-vkq-c282
        className="section-wrapper section-wrapper--landing"
      >
        <div _ngcontent-vkq-c282 className="content--center">
          <div
            _ngcontent-vkq-c282
            className="grid grid--center mobile-clearance"
          >
            <div
              _ngcontent-vkq-c282
              className="cell cell--6-col cell--4-col-phone cell--8-col-tablet"
            >
              <h2 _ngcontent-vkq-c282 className="text--left">
                Who We Are
              </h2>
              <p _ngcontent-vkq-c282>
                {" "}
                A decade ago, a group of hardcore fantasy geeks decided they
                were fed up with the lack of features and overall gameplay of
                season-long fantasy leagues on the big conglomerate websites.{" "}
              </p>
              <p _ngcontent-vkq-c282>
                {" "}
                They took matters into their own hands. After years of
                development, the first fantasy site built by fans, for fans, was
                ready for launch. Fantrax was born.{" "}
              </p>
              <p _ngcontent-vkq-c282>
                {" "}
                Our guiding principles were simple. Create a superior
                Commissioner Product (League Manager) that was easy-to-use, more
                powerful, more feature-rich, with more flexibility to set things
                up the way you wanted to. All backed up with the best customer
                service provided by people that actually care and want to make
                your experience better.{" "}
              </p>
              <p _ngcontent-vkq-c282>
                {" "}
                We'd like to introduce the newest member of the Fantrax team -
                X-Fan!
                <br _ngcontent-vkq-c282 /> X-Fan embodies the qualities that
                make fantasy sports great - the thrill and excitement of
                competing against your friends all-season long and, of course,
                winning!{" "}
              </p>
            </div>
            <div
              _ngcontent-vkq-c282
              className="cell cell--5-col cell--4-col-phone cell--6-col-tablet"
            >
              <div _ngcontent-vkq-c282 className="who-we-are" />
            </div>
          </div>
        </div>
      </section>
      <section
        _ngcontent-vkq-c282
        className="section-wrapper section-wrapper--landing section-wrapper--gray"
      >
        <div _ngcontent-vkq-c282 className="content--center mobile-clearance">
          <h2 _ngcontent-vkq-c282>The Home of Fantasy Sports</h2>
          <h6 _ngcontent-vkq-c282 className="_middle-text">
            {" "}
            Fantrax not only offers the most comprehensive League
            Manager/Commissioner Product for 9 sports, we offer a wide variety
            of cash games, plus a rapidly growing amount of fantasy news and
            advice at{" "}
            <Link to="/blog" _ngcontent-vkq-c282>
              Fantrax HQ
            </Link>
            .{" "}
          </h6>
        </div>
      </section>
      <section
        _ngcontent-vkq-c282
        className="section-wrapper section-wrapper--landing"
      >
        <div _ngcontent-vkq-c282 className="content--center mobile-clearance">
          <h2 _ngcontent-vkq-c282>Play Fantrax. Anywhere. On Any Device.</h2>
          <h6 _ngcontent-vkq-c282>
            Whether it's on your Desktop, tablet or mobile device, Fantrax has
            you covered.
          </h6>
          <div _ngcontent-vkq-c282 className="_showcase" />
        </div>
      </section>
    </section>
  );
};

export default AboutUs;
