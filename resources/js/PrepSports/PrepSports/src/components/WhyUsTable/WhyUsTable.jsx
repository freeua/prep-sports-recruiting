import React from "react";

const WhyUsTable = () => {
  return (
    <section className="section-wrapper section-wrapper--landing section-wrapper--gray">
      <div className="content--center mobile-clearance">
        <h2>How it works</h2>
        <h6>What ESPN, CBS and Yahoo! do NOT offer...</h6>
      </div>
      <div className="content--center margin">
        <table className="table table--striped table--features">
          <tr>
            <td></td>
            <td>
              <i className="comparison-table-logo--small"></i>
            </td>
            <td>
              <i className="comparison-table-logo--small comparison-table-logo--cbs"></i>
            </td>
            <td>
              <i className="comparison-table-logo--small comparison-table-logo--espn"></i>
            </td>
            <td>
              <i className="comparison-table-logo--small comparison-table-logo--yahoo"></i>
            </td>
          </tr>
          <tr>
            <td>"Easy Click" and "ClassNameic" Lineup Change Methods</td>
            <td>
              <i title="Advanced" className="icons icons--success">
                check
              </i>
            </td>
            <td>
              <i title="None" className="icons icons--gray-lightish">
                close
              </i>
            </td>
            <td>
              <i title="None" className="icons icons--gray-lightish">
                close
              </i>
            </td>
            <td>
              <i title="None" className="icons icons--gray-lightish">
                close
              </i>
            </td>
          </tr>
          <tr>
            <td>Multi-Team Trades</td>
            <td>
              <i title="Advanced" className="icons icons--success">
                check
              </i>
            </td>
            <td>
              <i title="None" className="icons icons--gray-lightish">
                close
              </i>
            </td>
            <td>
              <i title="None" className="icons icons--gray-lightish">
                close
              </i>
            </td>
            <td>
              <i title="None" className="icons icons--gray-lightish">
                close
              </i>
            </td>
          </tr>
          <tr>
            <td>
              College Football &amp; Basketball Commissioner / League Manager
            </td>
            <td>
              <i title="Advanced" className="icons icons--success">
                check
              </i>
            </td>
            <td>
              <i title="None" className="icons icons--gray-lightish">
                close
              </i>
            </td>
            <td>
              <i title="None" className="icons icons--gray-lightish">
                close
              </i>
            </td>
            <td>
              <i title="None" className="icons icons--gray-lightish">
                close
              </i>
            </td>
          </tr>
          <tr>
            <td>NASCAR Commissioner / League Manager</td>
            <td>
              <i title="Advanced" className="icons icons--success">
                check
              </i>
            </td>
            <td>
              <i title="None" className="icons icons--gray-lightish">
                close
              </i>
            </td>
            <td>
              <i title="None" className="icons icons--gray-lightish">
                close
              </i>
            </td>
            <td>
              <i title="None" className="icons icons--gray-lightish">
                close
              </i>
            </td>
          </tr>
          <tr>
            <td>
              Customizable Entry Fee and Payout Manager (Fantrax Treasurer)
            </td>
            <td>
              <i title="Advanced" className="icons icons--success">
                check
              </i>
            </td>
            <td>
              <i title="None" className="icons icons--gray-lightish">
                close
              </i>
            </td>
            <td>
              <i title="None" className="icons icons--gray-lightish">
                close
              </i>
            </td>
            <td>
              <i title="None" className="icons icons--gray-lightish">
                close
              </i>
            </td>
          </tr>
          <tr>
            <td>Quick and Thorough Customer Email Support</td>
            <td>
              <i title="Advanced" className="icons icons--success">
                check
              </i>
            </td>
            <td>
              <i title="None" className="icons icons--gray-lightish">
                close
              </i>
            </td>
            <td>
              <i title="None" className="icons icons--gray-lightish">
                close
              </i>
            </td>
            <td>
              <i title="None" className="icons icons--gray-lightish">
                close
              </i>
            </td>
          </tr>
        </table>
      </div>
      <div className="button-group button-group--center">
        <a
          mat-raised-button=""
          color="primary-large"
          routerlink="/features"
          className="mat-focus-indicator mat-raised-button mat-button-base mat-primary-large"
          tabindex="0"
          aria-disabled="false"
          href="/features"
        >
          <span className="mat-button-wrapper">All features</span>
          <div matripple="" className="mat-ripple mat-button-ripple"></div>
          <div className="mat-button-focus-overlay"></div>
        </a>
      </div>
    </section>
  );
};

export default WhyUsTable;
