import React from "react";

const Terms = () => {
  return (
    <div className="layout__outlet ng-tns-c274-0">
      <router-outlet
        name="header"
        role="banner"
        className="ng-tns-c274-0 ng-star-inserted"
      />
      <app-header className="ng-star-inserted">
        <div className="header accent">
          <figure />
        </div>
      </app-header>

      <router-outlet name="notice" className="ng-tns-c274-0" />

      <div className="ng-tns-c274-0 ng-trigger ng-trigger-chatLayoutAnimation">
        <router-outlet role="main" className="ng-tns-c274-0" />
        <app-terms _nghost-kxt-c281 className="ng-star-inserted">
          <div _ngcontent-kxt-c281 className="content content--center">
            <section
              _ngcontent-kxt-c281
              tabIndex={-1}
              className="main-content content__main content__main--small content__main--center"
            >
              <div _ngcontent-kxt-c281 className="content__headline">
                <h2 _ngcontent-kxt-c281>Terms of Service</h2>
              </div>
              <hr _ngcontent-kxt-c281 />
              <div _ngcontent-kxt-c281 className="mobile-clearance">
                <h4>1. Terms</h4>
                <p>
                  By accessing this Website, accessible from
                  www.prepsportsrecruiting.com, you are agreeing to be bound by
                  these Website Terms and Conditions of Use and agree that you
                  are responsible for the agreement with any applicable local
                  laws. If you disagree with any of these terms, you are
                  prohibited from accessing this site. The materials contained
                  in this Website are protected by copyright and trade mark law.
                </p>
                <h4>2. Use License</h4>
                <p>
                  Permission is granted to temporarily download one copy of the
                  materials on Prep Sports Recruiting, LLC's Website for
                  personal, non-commercial transitory viewing only. This is the
                  grant of a license, not a transfer of title, and under this
                  license you may not:
                </p>
                <ul>
                  <li>modify or copy the materials;</li>
                  <li>modify or copy the materials;</li>
                  <li>
                    use the materials for any commercial purpose or for any
                    public display;
                  </li>
                  <li>
                    attempt to reverse engineer any software contained on Prep
                    Sports Recruiting, LLC's Website;
                  </li>
                  <li>
                    remove any copyright or other proprietary notations from the
                    materials; or
                  </li>
                  <li>
                    transferring the materials to another person or "mirror" the
                    materials on any other server.
                  </li>
                </ul>
                <p>
                  This will let Prep Sports Recruiting, LLC to terminate upon
                  violations of any of these restrictions. Upon termination,
                  your viewing right will also be terminated and you should
                  destroy any downloaded materials in your possession whether it
                  is printed or electronic format. These Terms of Service has
                  been created with the help of the Terms Of Service Generator
                  and the Privacy Policy Generator.
                </p>

                <h4>3. Disclaimer</h4>
                <p>
                  All the materials on Prep Sports Recruiting, LLC’s Website are
                  provided "as is". Prep Sports Recruiting, LLC makes no
                  warranties, may it be expressed or implied, therefore negates
                  all other warranties. Furthermore, Prep Sports Recruiting, LLC
                  does not make any representations concerning the accuracy or
                  reliability of the use of the materials on its Website or
                  otherwise relating to such materials or any sites linked to
                  this Website.
                </p>

                <h4>4. Limitations</h4>
                <p>
                  Prep Sports Recruiting, LLC or its suppliers will not be hold
                  accountable for any damages that will arise with the use or
                  inability to use the materials on Prep Sports Recruiting,
                  LLC’s Website, even if Prep Sports Recruiting, LLC or an
                  authorize representative of this Website has been notified,
                  orally or written, of the possibility of such damage. Some
                  jurisdiction does not allow limitations on implied warranties
                  or limitations of liability for incidental damages, these
                  limitations may not apply to you.
                </p>

                <h4>5. Revisions and Errata</h4>
                <p>
                  The materials appearing on Prep Sports Recruiting, LLC’s
                  Website may include technical, typographical, or photographic
                  errors. Prep Sports Recruiting, LLC will not promise that any
                  of the materials in this Website are accurate, complete, or
                  current. Prep Sports Recruiting, LLC may change the materials
                  contained on its Website at any time without notice. Prep
                  Sports Recruiting, LLC does not make any commitment to update
                  the materials.
                </p>

                <h4>6. Links</h4>
                <p>
                  Prep Sports Recruiting, LLC has not reviewed all of the sites
                  linked to its Website and is not responsible for the contents
                  of any such linked site. The presence of any link does not
                  imply endorsement by Prep Sports Recruiting, LLC of the site.
                  The use of any linked website is at the user’s own risk.
                </p>

                <h4>7. Site Terms of Use Modifications</h4>
                <p>
                  Prep Sports Recruiting, LLC may revise these Terms of Use for
                  its Website at any time without prior notice. By using this
                  Website, you are agreeing to be bound by the current version
                  of these Terms and Conditions of Use.
                </p>

                <h4>8. Your Privacy</h4>
                <p>Please read our Privacy Policy.</p>

                <h4>9. Governing Law</h4>
                <p>
                  Any claim related to Prep Sports Recruiting, LLC's Website
                  shall be governed by the laws of us without regards to its
                  conflict of law provisions.
                </p>
              </div>
            </section>
          </div>
        </app-terms>
      </div>
    </div>
  );
};

export default Terms;
