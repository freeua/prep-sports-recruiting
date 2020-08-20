import React from 'react';
import GeneralSettings from '../Settings/GeneralSettings';
import Button from '../../../components/Button/Button';

const PersonalTab = () => {
  return (
    <div className="sportsContainer">
      <div id="panelPersonal">
        <style
          dangerouslySetInnerHTML={{
            __html:
              '\n\tdiv.ignoredUser {float:left; margin:2px 5px 2px 0px; padding:4px 7px 4px 7px; background-color:#dddddd; cursor:pointer}\n\tdiv.ignoredUser img {vertical-align:bottom;}\n',
          }}
        />
        <form id="userProfileForm" method="post">
          <h2 className="standalone">Personal Information</h2>
          <div
            className="filterContainer curve2"
            style={{ clear: 'both' }}
            id="dvErrors"
          >
            <table id="tblErrors" style={{ width: 768 }}></table>
            <input type="hidden" name="isSubmit" defaultValue="y" />
            <input
              type="hidden"
              name="oldEmail"
              defaultValue="mywork@gmail.com"
            />
            <input
              id="provinceState"
              name="provinceState"
              type="hidden"
              defaultValue={35}
            />
            <div style={{ height: 8 }} />
            <Button text="Save" />
            <div style={{ clear: 'both' }} />
            <GeneralSettings />
            <div className="userOptions">
              <div className="formatTitle curve2200 splitBar">
                <h2>General Options</h2>
              </div>
              <div className="columnBlockInfo clearfix curve0022">
                <div className="sportsTableBlock sportsTableBlockClean">
                  <table className="userTable curve0022">
                    <tbody>
                      <tr>
                        <td className="name">
                          <p>Receive League Emails:</p>
                        </td>
                        <td className="value">
                          <p>
                            <input
                              id="receiveEmail1"
                              name="receiveEmail"
                              type="checkbox"
                              defaultValue="true"
                              defaultChecked="checked"
                            />
                            <input
                              type="hidden"
                              name="_receiveEmail"
                              defaultValue="on"
                            />
                            {/* <img
                              alt="placeholder"
                              onmousedown="createToolTip(event,'2','TR','325','0','https://img.fantrax.com/icons/help.png','Receive League Emails','If you do not have this checked, you will block all emails from being sent to you. Make sure to have this checked unless you do not want to receive any kind of alerts in any of your leagues.<br/><br/> You also need to make sure that your email provider does not flag any of our emails to you as spam, so never mark them as spam, and make sure to allow all emails from fantrax.com and also fantrax.info.','');"
                              src="https://img.fantrax.com/icons/help.png"
                              title="Click for help"
                              className="tooltipIconLee"
                              align="absmiddle"
                            /> */}
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td className="name">
                          <p>Receive Other Emails:</p>
                        </td>
                        <td className="value">
                          <p>
                            <input
                              id="receivePromoEmail1"
                              name="receivePromoEmail"
                              type="checkbox"
                              defaultValue="true"
                              defaultChecked="checked"
                            />
                            <input
                              type="hidden"
                              name="_receivePromoEmail"
                              defaultValue="on"
                            />
                            {/* <img
                              alt="placeholder"
                              onmousedown="createToolTip(event,'3','TR','325','0','https://img.fantrax.com/icons/help.png','Receive Other Emails','If you do not have this checked, you will not receive emails about new features and product enhancements, special offers, games that may be of interest to you, etc.','');"
                              src="https://img.fantrax.com/icons/help.png"
                              title="Click for help"
                              className="tooltipIconLee"
                              align="absmiddle"
                            /> */}
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td className="name">
                          <p>Receive emails in:</p>
                        </td>
                        <td className="value">
                          <p>
                            <input
                              id="htmlEmails1"
                              name="htmlEmails"
                              type="radio"
                              defaultValue="true"
                              defaultChecked="checked"
                            />
                            HTML{' '}
                            <input
                              id="htmlEmails2"
                              name="htmlEmails"
                              type="radio"
                              defaultValue="false"
                            />
                            Plain Text
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td className="name">
                          <p>Hide Online Status:</p>
                        </td>
                        <td className="value">
                          <p>
                            <input
                              id="hideOnlineStatus1"
                              name="hideOnlineStatus"
                              type="checkbox"
                              defaultValue="true"
                            />
                            <input
                              type="hidden"
                              name="_hideOnlineStatus"
                              defaultValue="on"
                            />
                            {/* <img
                              alt="placeholder"
                              onmousedown="createToolTip(event,'4','TR','325','0','https://img.fantrax.com/icons/help.png','Hide Online Status','If you select this option, other users will not be able to determine if you are currently visiting the site. Currently, users\' online status appears on the league home page in the chat window.','');"
                              src="https://img.fantrax.com/icons/help.png"
                              title="Click for help"
                              className="tooltipIconLee"
                              align="absmiddle"
                            /> */}
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td className="name">
                          <p>Hide City:</p>
                        </td>
                        <td className="value">
                          <p>
                            <input
                              id="hideCity1"
                              name="hideCity"
                              type="checkbox"
                              defaultValue="true"
                            />
                            <input
                              type="hidden"
                              name="_hideCity"
                              defaultValue="on"
                            />
                            {/* <img
                              alt="placeholder"
                              onmousedown="createToolTip(event,'5','TR','325','0','https://img.fantrax.com/icons/help.png','Hide City','Selecting this option will hide your city in all forum posts.','');"
                              src="https://img.fantrax.com/icons/help.png"
                              title="Click for help"
                              className="tooltipIconLee"
                              align="absmiddle"
                            /> */}
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td className="name">
                          <p>Name to show in public forums:</p>
                        </td>
                        <td className="value">
                          <p>
                            <input
                              id="forumUserDisplay1"
                              name="forumUserDisplay"
                              onclick="__forumUserDisplayChanged('USERNAME')"
                              type="radio"
                              defaultValue="USERNAME"
                              defaultChecked="checked"
                            />
                            Username
                            <input
                              id="forumUserDisplay2"
                              name="forumUserDisplay"
                              onclick="__forumUserDisplayChanged('REAL_NAME')"
                              type="radio"
                              defaultValue="REAL_NAME"
                            />
                            Real Name
                            <input
                              id="forumUserDisplay3"
                              name="forumUserDisplay"
                              onclick="__forumUserDisplayChanged('SCREEN_NAME')"
                              type="radio"
                              defaultValue="SCREEN_NAME"
                            />
                            Screen Name
                            <input
                              id="txtScreenName"
                              name="screenName"
                              disabled="disabled"
                              type="text"
                              defaultValue
                              maxLength={24}
                            />
                            {/* <img
                              alt="placeholder"
                              onmousedown="createToolTip(event,'6','TR','325','0','https://img.fantrax.com/icons/help.png','Public Forum Display','This is the text that will appear in each of your public forum messages identifying you as the author.','');"
                              src="https://img.fantrax.com/icons/help.png"
                              title="Click for help"
                              className="tooltipIconLee"
                              align="absmiddle"
                            /> */}
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td className="name">
                          <p>Forum Message View Order:</p>
                        </td>
                        <td className="value">
                          <p>
                            <input
                              id="mostRecentFirstForumMessages1"
                              name="mostRecentFirstForumMessages"
                              type="radio"
                              defaultValue="true"
                              defaultChecked="checked"
                            />
                            Most Recent First{' '}
                            <input
                              id="mostRecentFirstForumMessages2"
                              name="mostRecentFirstForumMessages"
                              type="radio"
                              defaultValue="false"
                            />
                            Oldest First &nbsp; &nbsp;
                            {/* <img
                              alt="placeholder"
                              onmousedown="createToolTip(event,'7','TR','325','0','https://img.fantrax.com/icons/help.png','Forum Message Order','This is the order in which all forum messages will appear. This includes the public forums, as well as your league forums.','');"
                              src="https://img.fantrax.com/icons/help.png"
                              title="Click for help"
                              className="tooltipIconLee"
                              align="absmiddle"
                            /> */}
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            {/* <ContentSettings /> */}
            <Button text="Save" />
            <div style={{ clear: 'both' }} />
          </div>
        </form>
      </div>
      <div id="panelAccount" style={{ display: 'none' }}>
        <style
          dangerouslySetInnerHTML={{
            __html:
              '\ntr.refunded {background-color:#dddddd}\ntr.failed {background-color:#ffebeb}\ntr.pending {background-color:#ffffcc}\ntr.deleted {background-color:#ffc0c0}\ntr.notVTU {color:#888888;}\n',
          }}
        />
        <div id="dvRefundAlert" style={{ display: 'none' }}>
          Are you sure you want to refund{' '}
          <span id="spnRefundAmount" style={{ fontWeight: 'bold' }} />
          ?
          <br />
          <br />
          <input type="checkbox" id="chkRefundBackToCard" /> Refunded back to
          card/paypal (done separately)
        </div>
        <form id="frmAccountSubmit" action="userProfile.go" method="post">
          <input type="hidden" name="isSubmit" defaultValue="y" />
          <input type="hidden" name="tabId" defaultValue="Account" />
          <h2 className="medium">Balances</h2>
          <div
            className="sportsTableBlock sportsTableBlockClean"
            style={{ clear: 'both' }}
          >
            <div className="userAccountContainer curve2 clearfix">
              <div className="userAccountBlock curve2">
                <div className="userAccountTableBlock curve1">
                  <div className="userAccountTableItem curve1">
                    <div className="t myriad">Cash ($US)</div>
                    <div className="a myriad">
                      <span>0,00</span>
                    </div>
                  </div>
                </div>
                <div className="userAccountTableBlock curve1">
                  <div className="userAccountTableItem curve1">
                    <div className="t myriad">Credit ($US)</div>
                    <div className="a myriad">
                      <span>0,00</span>
                    </div>
                  </div>
                </div>
                <div className="userAccountTableBlock curve1">
                  <div className="userAccountTableItem curve1">
                    <div className="t myriad">Premium League Credit ($US)</div>
                    <div className="a myriad">
                      <span>0,00</span>
                    </div>
                  </div>
                </div>
                <div className="userAccountTableBlock curve1">
                  <div className="userAccountTableItem curve1">
                    <div className="t myriad">Fantrax Points</div>
                    <div className="a myriad">0</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="iTabs curve2 clearfix">
              <ul>
                <li className="curve2020">
                  <a
                    className="defaultLink"
                    href="/newui/user/payment.go?qxw=fsTSytOT0ok4vgv0NWxfqMilAfGb8j63RF7YGsGXkyc&type=D&pr=0&userInfo=true"
                  >
                    Deposit Funds from Credit Card
                  </a>{' '}
                  {/* <img
                    alt="placeholder"
                    onmousedown="createToolTip(event,'8','TR','325','0','https://img.fantrax.com/icons/help.png','Deposit Funds','Click here to go to the screen that enables you to add funds to your account. Funds can be used for entry fees to contests, transaction fees where applicable, premium services, and shopping at the upcoming &quot;Fantrax Shop&quot;. You can request to withdraw your funds anytime.','');"
                    src="https://img.fantrax.com/icons/help.png"
                    title="Click for help"
                    className="tooltipIconLee"
                    align="absmiddle"
                  /> */}
                </li>
                <li>
                  <a
                    className="defaultLink"
                    href="/newui/user/depositFundsPaypal.go"
                  >
                    Deposit Funds from Paypal
                  </a>{' '}
                  {/* <img
                    alt="placeholder"
                    onmousedown="createToolTip(event,'9','TR','325','0','https://img.fantrax.com/icons/help.png','Deposit Funds via PayPal','Click here to go to the screen that enables you to add funds to your account using either your PayPal account, or if you don\'t have one, simply using your credit card/debit card. Funds can be used for entry fees to contests, transaction fees where applicable, premium services, and shopping at the upcoming &quot;Fantrax Shop&quot;. You can request to withdraw your funds anytime and we will mail out a check within 2 days of the request.','');"
                    src="https://img.fantrax.com/icons/help.png"
                    title="Click for help"
                    className="tooltipIconLee"
                    align="absmiddle"
                  /> */}
                </li>
                <li>
                  <a
                    className="defaultLink"
                    href="/newui/user/withdrawFunds.go?qxw=fsTSytOT0ok4vgv0NWxfqMilAfGb8j63RF7YGsGXkyc"
                  >
                    Withdraw Funds
                  </a>{' '}
                  {/* <img
                    alt="placeholder"
                    onmousedown="createToolTip(event,'10','TR','325','0','https://img.fantrax.com/icons/help.png','Withdraw Funds','Click here to go to the screen that enables you to withdraw some or all of your funds from your account. You can request to withdraw your funds at any time via check or Paypal.<br><br>* The minimum amount you can withdraw is $10.','');"
                    src="https://img.fantrax.com/icons/help.png"
                    title="Click for help"
                    className="tooltipIconLee"
                    align="absmiddle"
                  /> */}
                </li>
                <li className="curve0202">
                  <a
                    className="defaultLink"
                    href="/newui/user/editCcOnFile.go?qxw=fsTSytOT0ok4vgv0NWxfqMilAfGb8j63RF7YGsGXkyc"
                  >
                    Set Credit Card on File
                  </a>
                  {/* <img
                    alt="placeholder"
                    onmousedown="createToolTip(event,'11','TR','325','0','https://img.fantrax.com/icons/help.png','Set/Change Credit Card on File','Click here to go to the screen where you can enter or change your credit card info that we have on file.','');"
                    src="https://img.fantrax.com/icons/help.png"
                    title="Click for help"
                    className="tooltipIconLee"
                    align="absmiddle"
                  /> */}
                </li>
              </ul>
            </div>
            <h2 className="medium" style={{ paddingTop: 10 }}>
              Products &amp; Services
            </h2>
            <div style={{ padding: '0px 0px 0px 10px' }}></div>
            <br />
            <div
              className="sportsTableContainer curve2"
              style={{ clear: 'both', marginTop: 0 }}
            >
              <div className="formatTitle curve2200">
                <h2>Transactions</h2>
              </div>
              <div className="sportsTableBlock sportsTableBlockClean">
                <table className="sportsTable curve0022">
                  <tbody>
                    <tr>
                      <th className="date first">Date</th>
                      <th className="date">Type</th>
                      <th className="date">Description</th>
                      <th>Total Cost</th>
                      <th>Amount</th>
                      <th>Status</th>
                      <th className="last">ID</th>
                    </tr>
                    <tr>
                      <td colSpan={7}>You have no transactions</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PersonalTab;
