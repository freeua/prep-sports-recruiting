import React from 'react';

const AccountTab = () => {
  return (
    <div className="sportsContainer">
      <div id="panelPersonal" style={{ display: 'none' }}>
        <style
          dangerouslySetInnerHTML={{
            __html:
              '\n\tdiv.ignoredUser {float:left; margin:2px 5px 2px 0px; padding:4px 7px 4px 7px; background-color:#dddddd; cursor:pointer}\n\tdiv.ignoredUser img {vertical-align:bottom;}\n',
          }}
        />
        <form
          id="userProfileForm"
          action="userProfile.go"
          method="post"
          encType="multipart/form-data"
        >
          <h2 className="standalone">Personal Information</h2>
          <div
            className="filterContainer curve2"
            style={{ clear: 'both' }}
            id="dvErrors"
          >
            <table id="tblErrors" style={{ width: 768 }}></table>
            <input type="hidden" name="isSubmit" defaultValue="y" />
            <input type="hidden" name="oldEmail" defaultValue="test@mail.com" />
            <input
              id="provinceState"
              name="provinceState"
              type="hidden"
              defaultValue={35}
            />
            <div style={{ height: 8 }} />
            <div className="filterButton curve2" onclick="__doSubmit()">
              <span className="curve2">Save</span>
            </div>
            <div style={{ clear: 'both' }} />
            <div className="userOptions">
              <div className="formatTitle curve2200 splitBar">
                <h2>General</h2>
              </div>
              <div className="columnBlockInfo clearfix curve0022">
                <div className="sportsTableBlock sportsTableBlockClean">
                  <table className="userTable curve0022">
                    <tbody>
                      <tr>
                        <td className="name">
                          <p>Username:</p>
                        </td>
                        <td className="value">
                          <p>Test</p>
                        </td>
                      </tr>
                      <tr>
                        <td className="name">
                          <p>Change Password To:</p>
                        </td>
                        <td className="value">
                          <p style={{ whiteSpace: 'nowrap' }}>
                            <input
                              type="password"
                              name="newPassword"
                              defaultValue
                              className="tb"
                              onchange="__passwordChange()"
                            />
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td className="name">
                          <p>Retype New Password:</p>
                        </td>
                        <td className="value">
                          <p>
                            <input
                              type="password"
                              name="retypePassword"
                              defaultValue
                              className="tb"
                              onchange="__passwordChange()"
                            />
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td className="name">
                          <p>First Name:</p>
                        </td>
                        <td className="value">
                          <p>
                            <input
                              id="firstName"
                              name="firstName"
                              className="tb"
                              onchange="__dataChanged()"
                              type="text"
                              defaultValue
                              maxLength={40}
                            />
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td className="name">
                          <p>Last Name:</p>
                        </td>
                        <td className="value">
                          <p>
                            <input
                              id="lastName"
                              name="lastName"
                              className="tb"
                              onchange="__dataChanged()"
                              type="text"
                              defaultValue
                              maxLength={40}
                            />
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td className="name">
                          <p>Address 1:</p>
                        </td>
                        <td className="value">
                          <p>
                            <input
                              id="address1"
                              name="address1"
                              className="tb"
                              onchange="__dataChanged()"
                              type="text"
                              defaultValue
                              maxLength={70}
                            />
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td className="name">
                          <p>Address 2:</p>
                        </td>
                        <td className="value">
                          <p>
                            <input
                              id="address2"
                              name="address2"
                              className="tb"
                              onchange="__dataChanged()"
                              type="text"
                              defaultValue
                              maxLength={70}
                            />
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td className="name">
                          <p>City:</p>
                        </td>
                        <td className="value">
                          <p>
                            <input
                              id="city"
                              name="city"
                              className="tb"
                              onchange="__dataChanged()"
                              type="text"
                              defaultValue
                              maxLength={40}
                            />
                          </p>
                        </td>
                      </tr>
                      <tr id="otherStateProv" style={{}}>
                        <td className="name">
                          <p>Prov/State:</p>
                        </td>
                        <td className="value">
                          <p>
                            <input
                              type="text"
                              id="stateProvText"
                              cssclass="tb"
                              maxLength={40}
                              onchange="__dataChanged()"
                            />
                          </p>
                        </td>
                      </tr>
                      <tr id="canadaProvinces" style={{ display: 'none' }}>
                        <td className="name">
                          <p>Province:</p>
                        </td>
                        <td className="value">
                          <p>
                            <select id="provinceSelect" cssclass="tb">
                              <option value="AB">Alberta</option>
                              <option value="BC">British Columbia</option>
                              <option value="MB">Manitoba</option>
                              <option value="NB">New Brunswick</option>
                              <option value="NL">
                                Newfoundland and Labrador
                              </option>
                              <option value="NT">Northwest Territories</option>
                              <option value="NS">Nova Scotia</option>
                              <option value="NU">Nunavut</option>
                              <option value="ON">Ontario</option>
                              <option value="PI">Prince Edward Island</option>
                              <option value="QC">Quebec</option>
                              <option value="SK">Saskatchewan</option>
                              <option value="YT">Yukon</option>
                            </select>
                          </p>
                        </td>
                      </tr>
                      <tr id="usStates" style={{ display: 'none' }}>
                        <td className="name">
                          <p>State:</p>
                        </td>
                        <td className="value">
                          <p>
                            <select id="stateSelect" cssclass="tb">
                              <option value="AL">Alabama</option>
                              <option value="AK">Alaska</option>
                              <option value="AZ">Arizona</option>
                              <option value="AR">Arkansas</option>
                              <option value="AA">Armed Forces Americas</option>
                              <option value="AE">Armed Forces Europe</option>
                              <option value="AP">Armed Forces Pacific</option>
                              <option value="CA">California</option>
                              <option value="CO">Colorado</option>
                              <option value="CT">Connecticut</option>
                              <option value="DE">Delaware</option>
                              <option value="FL">Florida</option>
                              <option value="GA">Georgia</option>
                              <option value="HI">Hawaii</option>
                              <option value="ID">Idaho</option>
                              <option value="IL">Illinois</option>
                              <option value="IN">Indiana</option>
                              <option value="IA">Iowa</option>
                              <option value="KS">Kansas</option>
                              <option value="KY">Kentucky</option>
                              <option value="LA">Louisiana</option>
                              <option value="ME">Maine</option>
                              <option value="MD">Maryland</option>
                              <option value="MA">Massachusetts</option>
                              <option value="MI">Michigan</option>
                              <option value="MN">Minnesota</option>
                              <option value="MS">Mississippi</option>
                              <option value="MO">Missouri</option>
                              <option value="MT">Montana</option>
                              <option value="NE">Nebraska</option>
                              <option value="NV">Nevada</option>
                              <option value="NH">New Hampshire</option>
                              <option value="NJ">New Jersey</option>
                              <option value="NM">New Mexico</option>
                              <option value="NY">New York</option>
                              <option value="NC">North Carolina</option>
                              <option value="ND">North Dakota</option>
                              <option value="OH">Ohio</option>
                              <option value="OK">Oklahoma</option>
                              <option value="OR">Oregon</option>
                              <option value="PA">Pennsylvania</option>
                              <option value="RI">Rhode Island</option>
                              <option value="SC">South Carolina</option>
                              <option value="SD">South Dakota</option>
                              <option value="TN">Tennessee</option>
                              <option value="TX">Texas</option>
                              <option value="UT">Utah</option>
                              <option value="VT">Vermont</option>
                              <option value="VA">Virginia</option>
                              <option value="WA">Washington</option>
                              <option value="DC">Washington D.C.</option>
                              <option value="WV">West Virginia</option>
                              <option value="WI">Wisconsin</option>
                              <option value="WY">Wyoming</option>
                            </select>
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td className="name" nowrap="nowrap">
                          <p>Postal/Zip Code:</p>
                        </td>
                        <td className="value">
                          <p>
                            <input
                              id="postalCode"
                              name="postalCode"
                              className="tb"
                              onchange="__dataChanged()"
                              type="text"
                              defaultValue
                              maxLength={40}
                            />
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td className="name">
                          <p>Country:</p>
                        </td>
                        <td className="value">
                          <p>
                            <select
                              id="country"
                              name="country"
                              onchange="__setStateProvControls();"
                            >
                              <option value="US">United States</option>
                              <option value="CA">Canada</option>
                              <option value="GB">United Kingdom</option>
                              <option value="AF">Afghanistan</option>
                              <option value="AL">Albania</option>
                              <option value="DZ">Algeria</option>
                              <option value="AS">American Samoa</option>
                              <option value="AD">Andorra</option>
                              <option value="AO">Angola</option>
                              <option value="AI">Anguilla</option>
                              <option value="AQ">Antarctica</option>
                              <option value="AG">Antigua and Barbuda</option>
                              <option value="AR">Argentina</option>
                              <option value="AM">Armenia</option>
                              <option value="AW">Aruba</option>
                              <option value="AU">Australia</option>
                              <option value="AT">Austria</option>
                              <option value="AZ">Azerbaijan</option>
                              <option value="BS">Bahamas</option>
                              <option value="BH">Bahrain</option>
                              <option value="BD">Bangladesh</option>
                              <option value="BB">Barbados</option>
                              <option value="BY">Belarus</option>
                              <option value="BE">Belgium</option>
                              <option value="BZ">Belize</option>
                              <option value="BJ">Benin</option>
                              <option value="BM">Bermuda</option>
                              <option value="BT">Bhutan</option>
                              <option value="BO">Bolivia</option>
                              <option value="BA">Bosnia and Herzegovina</option>
                              <option value="BW">Botswana</option>
                              <option value="BV">Bouv et Island</option>
                              <option value="BR">Brazil</option>
                              <option value="IO">
                                British Indian Ocean Territory
                              </option>
                              <option value="BN">Brunei Darussalam</option>
                              <option value="BG">Bulgaria</option>
                              <option value="BF">Burkina Faso</option>
                              <option value="BI">Burundi</option>
                              <option value="KH">Cambodia</option>
                              <option value="CM">Cameroon</option>
                              <option value="CA">Canada</option>
                              <option value="CV">Cape Verde</option>
                              <option value="KY">Cayman Islands</option>
                              <option value="CF">
                                Central African Republic
                              </option>
                              <option value="TD">Chad</option>
                              <option value="CL">Chile</option>
                              <option value="CN">China</option>
                              <option value="CX">Christmas Island</option>
                              <option value="CC">
                                Cocos (Keeling) Islands
                              </option>
                              <option value="CO">Colombia</option>
                              <option value="KM">Comoros</option>
                              <option value="CG">
                                Congo, People's Rep. of
                              </option>
                              <option value="CK">Cook Islands</option>
                              <option value="CR">Costa Rica</option>
                              <option value="CI">
                                Cote D'Ivoire (Ivory Coast)
                              </option>
                              <option value="HR">Croatia</option>
                              <option value="CU">Cuba</option>
                              <option value="CW">CuraÃ§ao</option>
                              <option value="CY">Cyprus</option>
                              <option value="CZ">Czech Republic</option>
                              <option value="CD">
                                Democratic Republic of Congo
                              </option>
                              <option value="DK">Denmark</option>
                              <option value="DJ">Djibouti</option>
                              <option value="DM">Dominica</option>
                              <option value="DO">Dominican Republic</option>
                              <option value="TL">East Timor</option>
                              <option value="EC">Ecuador</option>
                              <option value="EG">Egypt</option>
                              <option value="SV">El Salvador</option>
                              <option value="EN">England</option>
                              <option value="GQ">Equatorial Guinea</option>
                              <option value="ER">Eritrea</option>
                              <option value="EE">Estonia</option>
                              <option value="ET">Ethiopia</option>
                              <option value="FK">
                                Falkland Islands (Malvinas)
                              </option>
                              <option value="FO">Faroe Islands</option>
                              <option value="FJ">Fiji</option>
                              <option value="FI">Finland</option>
                              <option value="FR">France</option>
                              <option value="FX">France - Metropolitan</option>
                              <option value="GF">French Guiana</option>
                              <option value="PF">French Polynesia</option>
                              <option value="TF">
                                French Southern Territories
                              </option>
                              <option value="GA">Gabon</option>
                              <option value="GM">Gambia</option>
                              <option value="GE">Georgia</option>
                              <option value="DE">Germany</option>
                              <option value="GH">Ghana</option>
                              <option value="GI">Gibraltar</option>
                              <option value="GR">Greece</option>
                              <option value="GL">Greenland</option>
                              <option value="GD">Grenada</option>
                              <option value="GP">Guadeloupe</option>
                              <option value="GU">Guam</option>
                              <option value="GT">Guatemala</option>
                              <option value="GN">Guinea</option>
                              <option value="GW">Guinea-Bissau</option>
                              <option value="GY">Guyana</option>
                              <option value="HT">Haiti</option>
                              <option value="HM">
                                Heard and McDonald Islands
                              </option>
                              <option value="HN">Honduras</option>
                              <option value="HK">Hong Kong</option>
                              <option value="HU">Hungary</option>
                              <option value="IS">Iceland</option>
                              <option value="IN">India</option>
                              <option value="ID">Indonesia</option>
                              <option value="IR">Iran</option>
                              <option value="IQ">Iraq</option>
                              <option value="IE">Ireland</option>
                              <option value="IL">Israel</option>
                              <option value="IT">Italy</option>
                              <option value="JM">Jamaica</option>
                              <option value="JP">Japan</option>
                              <option value="JO">Jordan</option>
                              <option value="KZ">Kazakhstan</option>
                              <option value="KE">Kenya</option>
                              <option value="KI">Kiribati</option>
                              <option value="XK">Kosovo</option>
                              <option value="KW">Kuwait</option>
                              <option value="KG">Kyrgyzstan</option>
                              <option value="LA">Laos</option>
                              <option value="LV">Latvia</option>
                              <option value="LB">Lebanon</option>
                              <option value="LS">Lesotho</option>
                              <option value="LR">Liberia</option>
                              <option value="LY">Libya</option>
                              <option value="LI">Liechtenstein</option>
                              <option value="LT">Lithuania</option>
                              <option value="LU">Luxembourg</option>
                              <option value="MO">Macau</option>
                              <option value="MK">Macedonia</option>
                              <option value="MG">Madagascar</option>
                              <option value="MW">Malawi</option>
                              <option value="MY">Malaysia</option>
                              <option value="MV">Maldives</option>
                              <option value="ML">Mali</option>
                              <option value="MT">Malta</option>
                              <option value="MH">Marshall Islands</option>
                              <option value="MQ">Martinique</option>
                              <option value="MR">Mauritania</option>
                              <option value="MU">Mauritius</option>
                              <option value="YT">Mayotte</option>
                              <option value="MX">Mexico</option>
                              <option value="FM">Micronesia</option>
                              <option value="MD">Moldova</option>
                              <option value="MC">Monaco</option>
                              <option value="MN">Mongolia</option>
                              <option value="ME">Montenegro</option>
                              <option value="MS">Montserrat</option>
                              <option value="MA">Morocco</option>
                              <option value="MZ">Mozambique</option>
                              <option value="MM">Myanmar</option>
                              <option value="NA">Namibia</option>
                              <option value="NR">Nauru</option>
                              <option value="NP">Nepal</option>
                              <option value="NL">Netherlands</option>
                              <option value="AN">Netherlands Antilles</option>
                              <option value="NT">Neutral Zone</option>
                              <option value="NC">New Caledonia</option>
                              <option value="NZ">New Zealand</option>
                              <option value="NI">Nicaragua</option>
                              <option value="NE">Niger</option>
                              <option value="NG">Nigeria</option>
                              <option value="NU">Niue</option>
                              <option value="NF">Norfolk Island</option>
                              <option value="KP">North Korea</option>
                              <option value="ND">Northern Ireland</option>
                              <option value="MP">
                                Northern Mariana Islands
                              </option>
                              <option value="NO">Norway</option>
                              <option value="OM">Oman</option>
                              <option value="PK">Pakistan</option>
                              <option value="PW">Palau</option>
                              <option value="PA">Panama</option>
                              <option value="PG">Papua New Guinea</option>
                              <option value="PY">Paraguay</option>
                              <option value="PE">Peru</option>
                              <option value="PH">Philippines</option>
                              <option value="PN">Pitcairn</option>
                              <option value="PL">Poland</option>
                              <option value="PT">Portugal</option>
                              <option value="PR">Puerto Rico</option>
                              <option value="QA">Qatar</option>
                              <option value="RE">Reunion</option>
                              <option value="RO">Romania</option>
                              <option value="RU">Russia</option>
                              <option value="RW">Rwanda</option>
                              <option value="GS">
                                S. Georgia/S. Sandwich Isls.
                              </option>
                              <option value="KN">Saint Kitts and Nevis</option>
                              <option value="LC">Saint Lucia</option>
                              <option value="MF">Saint Martin</option>
                              <option value="VC">
                                Saint Vincent/Grenadines
                              </option>
                              <option value="WS">Samoa</option>
                              <option value="SM">San Marino</option>
                              <option value="ST">Sao Tome and Principe</option>
                              <option value="SA">Saudi Arabia</option>
                              <option value="SQ">Scotland</option>
                              <option value="SN">Senegal</option>
                              <option value="RS">Serbia</option>
                              <option value="SC">Seychelles</option>
                              <option value="SL">Sierra Leone</option>
                              <option value="SG">Singapore</option>
                              <option value="SX">Sint Maarten</option>
                              <option value="SK">Slovak Republic</option>
                              <option value="SI">Slovenia</option>
                              <option value="SB">Solomon Islands</option>
                              <option value="SO">Somalia</option>
                              <option value="ZA">South Africa</option>
                              <option value="KR">South Korea</option>
                              <option value="SS">South Sudan</option>
                              <option value="ES">Spain</option>
                              <option value="LK">Sri Lanka</option>
                              <option value="SH">St. Helena</option>
                              <option value="PM">
                                St. Pierre and Miquelon
                              </option>
                              <option value="SD">Sudan</option>
                              <option value="SR">Suriname</option>
                              <option value="SJ">
                                Svalbard/Jan Mayen Isls.
                              </option>
                              <option value="SZ">Swaziland</option>
                              <option value="SE">Sweden</option>
                              <option value="CH">Switzerland</option>
                              <option value="SY">Syria</option>
                              <option value="TW">Taiwan</option>
                              <option value="TJ">Tajikistan</option>
                              <option value="TZ">Tanzania</option>
                              <option value="TH">Thailand</option>
                              <option value="TG">Togo</option>
                              <option value="TK">Tokelau</option>
                              <option value="TO">Tonga</option>
                              <option value="TT">Trinidad and Tobago</option>
                              <option value="TN">Tunisia</option>
                              <option value="TR">Turkey</option>
                              <option value="TM">Turkmenistan</option>
                              <option value="TC">
                                Turks and Caicos Islands
                              </option>
                              <option value="TV">Tuvalu</option>
                              <option value="UM">
                                US Minor Outlying Islands
                              </option>
                              <option value="UG">Uganda</option>
                              <option value="UA" selected="selected">
                                Ukraine
                              </option>
                              <option value="AE">United Arab Emirates</option>
                              <option value="GB">United Kingdom</option>
                              <option value="US">United States</option>
                              <option value="UY">Uruguay</option>
                              <option value="UZ">Uzbekistan</option>
                              <option value="VU">Vanuatu</option>
                              <option value="VA">
                                Vatican City State (Holy See)
                              </option>
                              <option value="VE">Venezuela</option>
                              <option value="VN">Vietnam</option>
                              <option value="VG">
                                Virgin Islands (British)
                              </option>
                              <option value="VI">Virgin Islands (U.S.)</option>
                              <option value="WL">Wales</option>
                              <option value="WF">
                                Wallis and Futuna Islands
                              </option>
                              <option value="EH">Western Sahara</option>
                              <option value="YE">Yemen</option>
                              <option value="YU">Yugoslavia</option>
                              <option value="ZM">Zambia</option>
                              <option value="ZW">Zimbabwe</option>
                            </select>
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td className="name">
                          <p>Time Zone:</p>
                        </td>
                        <td className="value">
                          <p>
                            <select
                              id="timeZone"
                              name="timeZone"
                              style={{ width: 250 }}
                              onchange="__dataChanged()"
                            >
                              <option value="Pacific/Midway">
                                (GMT-11:00) SST - Midway
                              </option>
                              <option value="Pacific/Niue">
                                (GMT-11:00) NUT - Niue
                              </option>
                              <option value="Pacific/Pago_Pago">
                                (GMT-11:00) SST - Pago Pago
                              </option>
                              <option value="Pacific/Samoa">
                                (GMT-11:00) SST - Samoa
                              </option>
                              <option value="America/Adak">
                                (GMT-9:00) HDT - Adak
                              </option>
                              <option value="America/Atka">
                                (GMT-9:00) HDT - Atka
                              </option>
                              <option value="Pacific/Honolulu">
                                (GMT-10:00) HST - Honolulu
                              </option>
                              <option value="Pacific/Johnston">
                                (GMT-10:00) HST - Johnston
                              </option>
                              <option value="Pacific/Rarotonga">
                                (GMT-10:00) CKT - Rarotonga
                              </option>
                              <option value="Pacific/Tahiti">
                                (GMT-10:00) TAHT - Tahiti
                              </option>
                              <option value="Pacific/Marquesas">
                                (GMT-9:30) MART - Marquesas
                              </option>
                              <option value="America/Anchorage">
                                (GMT-8:00) AKDT - Anchorage
                              </option>
                              <option value="Pacific/Gambier">
                                (GMT-9:00) GAMT - Gambier
                              </option>
                              <option value="America/Juneau">
                                (GMT-8:00) AKDT - Juneau
                              </option>
                              <option value="America/Metlakatla">
                                (GMT-8:00) AKDT - Metlakatla
                              </option>
                              <option value="America/Nome">
                                (GMT-8:00) AKDT - Nome
                              </option>
                              <option value="America/Sitka">
                                (GMT-8:00) AKDT - Sitka
                              </option>
                              <option value="America/Yakutat">
                                (GMT-8:00) AKDT - Yakutat
                              </option>
                              <option value="America/Dawson">
                                (GMT-7:00) PDT - Dawson
                              </option>
                              <option value="America/Ensenada">
                                (GMT-7:00) PDT - Ensenada
                              </option>
                              <option value="America/Los_Angeles">
                                (GMT-7:00) PDT - Los Angeles
                              </option>
                              <option value="Pacific/Pitcairn">
                                (GMT-8:00) PST - Pitcairn
                              </option>
                              <option value="America/Santa_Isabel">
                                (GMT-7:00) PDT - Santa Isabel
                              </option>
                              <option value="America/Tijuana">
                                (GMT-7:00) PDT - Tijuana
                              </option>
                              <option value="America/Vancouver">
                                (GMT-7:00) PDT - Vancouver
                              </option>
                              <option value="America/Whitehorse">
                                (GMT-7:00) PDT - Whitehorse
                              </option>
                              <option value="America/Boise">
                                (GMT-6:00) MDT - Boise
                              </option>
                              <option value="America/Cambridge_Bay">
                                (GMT-6:00) MDT - Cambridge Bay
                              </option>
                              <option value="America/Chihuahua">
                                (GMT-6:00) MDT - Chihuahua
                              </option>
                              <option value="America/Creston">
                                (GMT-7:00) MST - Creston
                              </option>
                              <option value="America/Dawson_Creek">
                                (GMT-7:00) MST - Dawson Creek
                              </option>
                              <option value="America/Denver">
                                (GMT-6:00) MDT - Denver
                              </option>
                              <option value="America/Edmonton">
                                (GMT-6:00) MDT - Edmonton
                              </option>
                              <option value="America/Fort_Nelson">
                                (GMT-7:00) MST - Fort Nelson
                              </option>
                              <option value="America/Hermosillo">
                                (GMT-7:00) MST - Hermosillo
                              </option>
                              <option value="America/Inuvik">
                                (GMT-6:00) MDT - Inuvik
                              </option>
                              <option value="America/Mazatlan">
                                (GMT-6:00) MDT - Mazatlan
                              </option>
                              <option value="America/Ojinaga">
                                (GMT-6:00) MDT - Ojinaga
                              </option>
                              <option value="America/Phoenix">
                                (GMT-7:00) MST - Phoenix
                              </option>
                              <option value="America/Shiprock">
                                (GMT-6:00) MDT - Shiprock
                              </option>
                              <option value="America/Yellowknife">
                                (GMT-6:00) MDT - Yellowknife
                              </option>
                              <option value="America/Bahia_Banderas">
                                (GMT-5:00) CDT - Bahia Banderas
                              </option>
                              <option value="America/Belize">
                                (GMT-6:00) CST - Belize
                              </option>
                              <option value="America/North_Dakota/Beulah">
                                (GMT-5:00) CDT - Beulah
                              </option>
                              <option value="America/North_Dakota/Center">
                                (GMT-5:00) CDT - Center
                              </option>
                              <option value="America/Chicago">
                                (GMT-5:00) CDT - Chicago
                              </option>
                              <option value="America/Costa_Rica">
                                (GMT-6:00) CST - Costa Rica
                              </option>
                              <option value="Pacific/Easter">
                                (GMT-6:00) EAST - Easter
                              </option>
                              <option value="America/El_Salvador">
                                (GMT-6:00) CST - El Salvador
                              </option>
                              <option value="Pacific/Galapagos">
                                (GMT-6:00) GALT - Galapagos
                              </option>
                              <option value="America/Guatemala">
                                (GMT-6:00) CST - Guatemala
                              </option>
                              <option value="America/Indiana/Knox">
                                (GMT-5:00) CDT - Knox
                              </option>
                              <option value="America/Knox_IN">
                                (GMT-5:00) CDT - Knox IN
                              </option>
                              <option value="America/Managua">
                                (GMT-6:00) CST - Managua
                              </option>
                              <option value="America/Matamoros">
                                (GMT-5:00) CDT - Matamoros
                              </option>
                              <option value="America/Menominee">
                                (GMT-5:00) CDT - Menominee
                              </option>
                              <option value="America/Merida">
                                (GMT-5:00) CDT - Merida
                              </option>
                              <option value="America/Mexico_City">
                                (GMT-5:00) CDT - Mexico City
                              </option>
                              <option value="America/Monterrey">
                                (GMT-5:00) CDT - Monterrey
                              </option>
                              <option value="America/North_Dakota/New_Salem">
                                (GMT-5:00) CDT - New Salem
                              </option>
                              <option value="America/Rainy_River">
                                (GMT-5:00) CDT - Rainy River
                              </option>
                              <option value="America/Rankin_Inlet">
                                (GMT-5:00) CDT - Rankin Inlet
                              </option>
                              <option value="America/Regina">
                                (GMT-6:00) CST - Regina
                              </option>
                              <option value="America/Resolute">
                                (GMT-5:00) CDT - Resolute
                              </option>
                              <option value="America/Swift_Current">
                                (GMT-6:00) CST - Swift Current
                              </option>
                              <option value="America/Tegucigalpa">
                                (GMT-6:00) CST - Tegucigalpa
                              </option>
                              <option value="America/Indiana/Tell_City">
                                (GMT-5:00) CDT - Tell City
                              </option>
                              <option value="America/Winnipeg">
                                (GMT-5:00) CDT - Winnipeg
                              </option>
                              <option value="America/Atikokan">
                                (GMT-5:00) EST - Atikokan
                              </option>
                              <option value="America/Bogota">
                                (GMT-5:00) COT - Bogota
                              </option>
                              <option value="America/Cancun">
                                (GMT-5:00) EST - Cancun
                              </option>
                              <option value="America/Cayman">
                                (GMT-5:00) EST - Cayman
                              </option>
                              <option value="America/Coral_Harbour">
                                (GMT-5:00) EST - Coral Harbour
                              </option>
                              <option value="America/Detroit">
                                (GMT-4:00) EDT - Detroit
                              </option>
                              <option value="America/Eirunepe">
                                (GMT-5:00) ACT - Eirunepe
                              </option>
                              <option value="America/Fort_Wayne">
                                (GMT-4:00) EDT - Fort Wayne
                              </option>
                              <option value="America/Grand_Turk">
                                (GMT-4:00) EDT - Grand Turk
                              </option>
                              <option value="America/Guayaquil">
                                (GMT-5:00) ECT - Guayaquil
                              </option>
                              <option value="America/Havana">
                                (GMT-4:00) CDT - Havana
                              </option>
                              <option value="America/Indiana/Indianapolis">
                                (GMT-4:00) EDT - Indianapolis
                              </option>
                              <option value="America/Indianapolis">
                                (GMT-4:00) EDT - Indianapolis
                              </option>
                              <option value="America/Iqaluit">
                                (GMT-4:00) EDT - Iqaluit
                              </option>
                              <option value="America/Jamaica">
                                (GMT-5:00) EST - Jamaica
                              </option>
                              <option value="America/Lima">
                                (GMT-5:00) PET - Lima
                              </option>
                              <option value="America/Kentucky/Louisville">
                                (GMT-4:00) EDT - Louisville
                              </option>
                              <option value="America/Louisville">
                                (GMT-4:00) EDT - Louisville
                              </option>
                              <option value="America/Indiana/Marengo">
                                (GMT-4:00) EDT - Marengo
                              </option>
                              <option value="America/Kentucky/Monticello">
                                (GMT-4:00) EDT - Monticello
                              </option>
                              <option value="America/Montreal">
                                (GMT-4:00) EDT - Montreal
                              </option>
                              <option value="America/Nassau">
                                (GMT-4:00) EDT - Nassau
                              </option>
                              <option value="America/New_York">
                                (GMT-4:00) EDT - New York
                              </option>
                              <option value="America/Nipigon">
                                (GMT-4:00) EDT - Nipigon
                              </option>
                              <option value="America/Panama">
                                (GMT-5:00) EST - Panama
                              </option>
                              <option value="America/Pangnirtung">
                                (GMT-4:00) EDT - Pangnirtung
                              </option>
                              <option value="America/Indiana/Petersburg">
                                (GMT-4:00) EDT - Petersburg
                              </option>
                              <option value="America/Port-au-Prince">
                                (GMT-4:00) EDT - Port-au-Prince
                              </option>
                              <option value="America/Porto_Acre">
                                (GMT-5:00) ACT - Porto Acre
                              </option>
                              <option value="America/Rio_Branco">
                                (GMT-5:00) ACT - Rio Branco
                              </option>
                              <option value="America/Thunder_Bay">
                                (GMT-4:00) EDT - Thunder Bay
                              </option>
                              <option value="America/Toronto">
                                (GMT-4:00) EDT - Toronto
                              </option>
                              <option value="America/Indiana/Vevay">
                                (GMT-4:00) EDT - Vevay
                              </option>
                              <option value="America/Indiana/Vincennes">
                                (GMT-4:00) EDT - Vincennes
                              </option>
                              <option value="America/Indiana/Winamac">
                                (GMT-4:00) EDT - Winamac
                              </option>
                              <option value="America/Anguilla">
                                (GMT-4:00) AST - Anguilla
                              </option>
                              <option value="America/Antigua">
                                (GMT-4:00) AST - Antigua
                              </option>
                              <option value="America/Aruba">
                                (GMT-4:00) AST - Aruba
                              </option>
                              <option value="America/Asuncion">
                                (GMT-4:00) PYT - Asuncion
                              </option>
                              <option value="America/Barbados">
                                (GMT-4:00) AST - Barbados
                              </option>
                              <option value="Atlantic/Bermuda">
                                (GMT-3:00) ADT - Bermuda
                              </option>
                              <option value="America/Blanc-Sablon">
                                (GMT-4:00) AST - Blanc-Sablon
                              </option>
                              <option value="America/Boa_Vista">
                                (GMT-4:00) AMT - Boa Vista
                              </option>
                              <option value="America/Campo_Grande">
                                (GMT-4:00) AMT - Campo Grande
                              </option>
                              <option value="America/Caracas">
                                (GMT-4:00) VET - Caracas
                              </option>
                              <option value="America/Cuiaba">
                                (GMT-4:00) AMT - Cuiaba
                              </option>
                              <option value="America/Curacao">
                                (GMT-4:00) AST - Curacao
                              </option>
                              <option value="America/Dominica">
                                (GMT-4:00) AST - Dominica
                              </option>
                              <option value="America/Glace_Bay">
                                (GMT-3:00) ADT - Glace Bay
                              </option>
                              <option value="America/Goose_Bay">
                                (GMT-3:00) ADT - Goose Bay
                              </option>
                              <option value="America/Grenada">
                                (GMT-4:00) AST - Grenada
                              </option>
                              <option value="America/Guadeloupe">
                                (GMT-4:00) AST - Guadeloupe
                              </option>
                              <option value="America/Guyana">
                                (GMT-4:00) GYT - Guyana
                              </option>
                              <option value="America/Halifax">
                                (GMT-3:00) ADT - Halifax
                              </option>
                              <option value="America/Kralendijk">
                                (GMT-4:00) AST - Kralendijk
                              </option>
                              <option value="America/La_Paz">
                                (GMT-4:00) BOT - La Paz
                              </option>
                              <option value="America/Lower_Princes">
                                (GMT-4:00) AST - Lower Princes
                              </option>
                              <option value="America/Manaus">
                                (GMT-4:00) AMT - Manaus
                              </option>
                              <option value="America/Marigot">
                                (GMT-4:00) AST - Marigot
                              </option>
                              <option value="America/Martinique">
                                (GMT-4:00) AST - Martinique
                              </option>
                              <option value="America/Moncton">
                                (GMT-3:00) ADT - Moncton
                              </option>
                              <option value="America/Montserrat">
                                (GMT-4:00) AST - Montserrat
                              </option>
                              <option value="America/Port_of_Spain">
                                (GMT-4:00) AST - Port of Spain
                              </option>
                              <option value="America/Porto_Velho">
                                (GMT-4:00) AMT - Porto Velho
                              </option>
                              <option value="America/Puerto_Rico">
                                (GMT-4:00) AST - Puerto Rico
                              </option>
                              <option value="America/Santiago">
                                (GMT-4:00) CLT - Santiago
                              </option>
                              <option value="America/Santo_Domingo">
                                (GMT-4:00) AST - Santo Domingo
                              </option>
                              <option value="America/St_Barthelemy">
                                (GMT-4:00) AST - St Barthelemy
                              </option>
                              <option value="America/St_Kitts">
                                (GMT-4:00) AST - St Kitts
                              </option>
                              <option value="America/St_Lucia">
                                (GMT-4:00) AST - St Lucia
                              </option>
                              <option value="America/St_Thomas">
                                (GMT-4:00) AST - St Thomas
                              </option>
                              <option value="America/St_Vincent">
                                (GMT-4:00) AST - St Vincent
                              </option>
                              <option value="America/Thule">
                                (GMT-3:00) ADT - Thule
                              </option>
                              <option value="America/Tortola">
                                (GMT-4:00) AST - Tortola
                              </option>
                              <option value="America/Virgin">
                                (GMT-4:00) AST - Virgin
                              </option>
                              <option value="America/St_Johns">
                                (GMT-2:30) NDT - St Johns
                              </option>
                              <option value="America/Araguaina">
                                (GMT-3:00) BRT - Araguaina
                              </option>
                              <option value="America/Bahia">
                                (GMT-3:00) BRT - Bahia
                              </option>
                              <option value="America/Belem">
                                (GMT-3:00) BRT - Belem
                              </option>
                              <option value="America/Argentina/Buenos_Aires">
                                (GMT-3:00) ART - Buenos Aires
                              </option>
                              <option value="America/Buenos_Aires">
                                (GMT-3:00) ART - Buenos Aires
                              </option>
                              <option value="America/Argentina/Catamarca">
                                (GMT-3:00) ART - Catamarca
                              </option>
                              <option value="America/Catamarca">
                                (GMT-3:00) ART - Catamarca
                              </option>
                              <option value="America/Cayenne">
                                (GMT-3:00) GFT - Cayenne
                              </option>
                              <option value="America/Argentina/ComodRivadavia">
                                (GMT-3:00) ART - ComodRivadavia
                              </option>
                              <option value="America/Argentina/Cordoba">
                                (GMT-3:00) ART - Cordoba
                              </option>
                              <option value="America/Cordoba">
                                (GMT-3:00) ART - Cordoba
                              </option>
                              <option value="America/Fortaleza">
                                (GMT-3:00) BRT - Fortaleza
                              </option>
                              <option value="America/Godthab">
                                (GMT-2:00) WGST - Godthab
                              </option>
                              <option value="America/Argentina/Jujuy">
                                (GMT-3:00) ART - Jujuy
                              </option>
                              <option value="America/Jujuy">
                                (GMT-3:00) ART - Jujuy
                              </option>
                              <option value="America/Argentina/La_Rioja">
                                (GMT-3:00) ART - La Rioja
                              </option>
                              <option value="America/Maceio">
                                (GMT-3:00) BRT - Maceio
                              </option>
                              <option value="America/Argentina/Mendoza">
                                (GMT-3:00) ART - Mendoza
                              </option>
                              <option value="America/Mendoza">
                                (GMT-3:00) ART - Mendoza
                              </option>
                              <option value="America/Miquelon">
                                (GMT-2:00) PMDT - Miquelon
                              </option>
                              <option value="America/Montevideo">
                                (GMT-3:00) UYT - Montevideo
                              </option>
                              <option value="America/Paramaribo">
                                (GMT-3:00) SRT - Paramaribo
                              </option>
                              <option value="America/Punta_Arenas">
                                (GMT-3:00) GMT-03:00 - Punta Arenas
                              </option>
                              <option value="America/Recife">
                                (GMT-3:00) BRT - Recife
                              </option>
                              <option value="America/Argentina/Rio_Gallegos">
                                (GMT-3:00) ART - Rio Gallegos
                              </option>
                              <option value="America/Rosario">
                                (GMT-3:00) ART - Rosario
                              </option>
                              <option value="America/Argentina/Salta">
                                (GMT-3:00) ART - Salta
                              </option>
                              <option value="America/Argentina/San_Juan">
                                (GMT-3:00) ART - San Juan
                              </option>
                              <option value="America/Argentina/San_Luis">
                                (GMT-3:00) ART - San Luis
                              </option>
                              <option value="America/Santarem">
                                (GMT-3:00) BRT - Santarem
                              </option>
                              <option value="America/Sao_Paulo">
                                (GMT-3:00) BRT - Sao Paulo
                              </option>
                              <option value="Atlantic/Stanley">
                                (GMT-3:00) FKT - Stanley
                              </option>
                              <option value="America/Argentina/Tucuman">
                                (GMT-3:00) ART - Tucuman
                              </option>
                              <option value="America/Argentina/Ushuaia">
                                (GMT-3:00) ART - Ushuaia
                              </option>
                              <option value="America/Noronha">
                                (GMT-2:00) FNT - Noronha
                              </option>
                              <option value="Atlantic/South_Georgia">
                                (GMT-2:00) GST - South Georgia
                              </option>
                              <option value="Atlantic/Azores">
                                (GMT+0:00) AZOST - Azores
                              </option>
                              <option value="Atlantic/Cape_Verde">
                                (GMT-1:00) CVT - Cape Verde
                              </option>
                              <option value="America/Scoresbysund">
                                (GMT+0:00) EGST - Scoresbysund
                              </option>
                              <option value="Africa/Abidjan">
                                (GMT+0:00) GMT - Abidjan
                              </option>
                              <option value="Africa/Accra">
                                (GMT+0:00) GMT - Accra
                              </option>
                              <option value="Africa/Bamako">
                                (GMT+0:00) GMT - Bamako
                              </option>
                              <option value="Africa/Banjul">
                                (GMT+0:00) GMT - Banjul
                              </option>
                              <option value="Europe/Belfast">
                                (GMT+1:00) BST - Belfast
                              </option>
                              <option value="Africa/Bissau">
                                (GMT+0:00) GMT - Bissau
                              </option>
                              <option value="Atlantic/Canary">
                                (GMT+1:00) WEST - Canary
                              </option>
                              <option value="Africa/Casablanca">
                                (GMT+0:00) WEST - Casablanca
                              </option>
                              <option value="Africa/Conakry">
                                (GMT+0:00) GMT - Conakry
                              </option>
                              <option value="Africa/Dakar">
                                (GMT+0:00) GMT - Dakar
                              </option>
                              <option value="America/Danmarkshavn">
                                (GMT+0:00) GMT - Danmarkshavn
                              </option>
                              <option value="Europe/Dublin">
                                (GMT+1:00) IST - Dublin
                              </option>
                              <option value="Africa/El_Aaiun">
                                (GMT+0:00) WEST - El Aaiun
                              </option>
                              <option value="Atlantic/Faeroe">
                                (GMT+1:00) WEST - Faeroe
                              </option>
                              <option value="Atlantic/Faroe">
                                (GMT+1:00) WEST - Faroe
                              </option>
                              <option value="Africa/Freetown">
                                (GMT+0:00) GMT - Freetown
                              </option>
                              <option value="Europe/Guernsey">
                                (GMT+1:00) BST - Guernsey
                              </option>
                              <option value="Europe/Isle_of_Man">
                                (GMT+1:00) BST - Isle of Man
                              </option>
                              <option value="Europe/Jersey">
                                (GMT+1:00) BST - Jersey
                              </option>
                              <option value="Europe/Lisbon">
                                (GMT+1:00) WEST - Lisbon
                              </option>
                              <option value="Africa/Lome">
                                (GMT+0:00) GMT - Lome
                              </option>
                              <option value="Europe/London">
                                (GMT+1:00) BST - London
                              </option>
                              <option value="Atlantic/Madeira">
                                (GMT+1:00) WEST - Madeira
                              </option>
                              <option value="Africa/Monrovia">
                                (GMT+0:00) GMT - Monrovia
                              </option>
                              <option value="Africa/Nouakchott">
                                (GMT+0:00) GMT - Nouakchott
                              </option>
                              <option value="Africa/Ouagadougou">
                                (GMT+0:00) GMT - Ouagadougou
                              </option>
                              <option value="Atlantic/Reykjavik">
                                (GMT+0:00) GMT - Reykjavik
                              </option>
                              <option value="Africa/Sao_Tome">
                                (GMT+0:00) GMT - Sao Tome
                              </option>
                              <option value="Atlantic/St_Helena">
                                (GMT+0:00) GMT - St Helena
                              </option>
                              <option value="Africa/Timbuktu">
                                (GMT+0:00) GMT - Timbuktu
                              </option>
                              <option value="Africa/Algiers">
                                (GMT+1:00) CET - Algiers
                              </option>
                              <option value="Europe/Amsterdam">
                                (GMT+2:00) CEST - Amsterdam
                              </option>
                              <option value="Europe/Andorra">
                                (GMT+2:00) CEST - Andorra
                              </option>
                              <option value="Africa/Bangui">
                                (GMT+1:00) WAT - Bangui
                              </option>
                              <option value="Europe/Belgrade">
                                (GMT+2:00) CEST - Belgrade
                              </option>
                              <option value="Europe/Berlin">
                                (GMT+2:00) CEST - Berlin
                              </option>
                              <option value="Europe/Bratislava">
                                (GMT+2:00) CEST - Bratislava
                              </option>
                              <option value="Africa/Brazzaville">
                                (GMT+1:00) WAT - Brazzaville
                              </option>
                              <option value="Europe/Brussels">
                                (GMT+2:00) CEST - Brussels
                              </option>
                              <option value="Europe/Budapest">
                                (GMT+2:00) CEST - Budapest
                              </option>
                              <option value="Europe/Busingen">
                                (GMT+2:00) CEST - Busingen
                              </option>
                              <option value="Africa/Ceuta">
                                (GMT+2:00) CEST - Ceuta
                              </option>
                              <option value="Europe/Copenhagen">
                                (GMT+2:00) CEST - Copenhagen
                              </option>
                              <option value="Africa/Douala">
                                (GMT+1:00) WAT - Douala
                              </option>
                              <option value="Europe/Gibraltar">
                                (GMT+2:00) CEST - Gibraltar
                              </option>
                              <option value="Atlantic/Jan_Mayen">
                                (GMT+2:00) CEST - Jan Mayen
                              </option>
                              <option value="Africa/Kinshasa">
                                (GMT+1:00) WAT - Kinshasa
                              </option>
                              <option value="Africa/Lagos">
                                (GMT+1:00) WAT - Lagos
                              </option>
                              <option value="Africa/Libreville">
                                (GMT+1:00) WAT - Libreville
                              </option>
                              <option value="Europe/Ljubljana">
                                (GMT+2:00) CEST - Ljubljana
                              </option>
                              <option value="Africa/Luanda">
                                (GMT+1:00) WAT - Luanda
                              </option>
                              <option value="Europe/Luxembourg">
                                (GMT+2:00) CEST - Luxembourg
                              </option>
                              <option value="Europe/Madrid">
                                (GMT+2:00) CEST - Madrid
                              </option>
                              <option value="Africa/Malabo">
                                (GMT+1:00) WAT - Malabo
                              </option>
                              <option value="Europe/Malta">
                                (GMT+2:00) CEST - Malta
                              </option>
                              <option value="Europe/Monaco">
                                (GMT+2:00) CEST - Monaco
                              </option>
                              <option value="Africa/Ndjamena">
                                (GMT+1:00) WAT - Ndjamena
                              </option>
                              <option value="Africa/Niamey">
                                (GMT+1:00) WAT - Niamey
                              </option>
                              <option value="Europe/Oslo">
                                (GMT+2:00) CEST - Oslo
                              </option>
                              <option value="Europe/Paris">
                                (GMT+2:00) CEST - Paris
                              </option>
                              <option value="Europe/Podgorica">
                                (GMT+2:00) CEST - Podgorica
                              </option>
                              <option value="Africa/Porto-Novo">
                                (GMT+1:00) WAT - Porto-Novo
                              </option>
                              <option value="Europe/Prague">
                                (GMT+2:00) CEST - Prague
                              </option>
                              <option value="Europe/Rome">
                                (GMT+2:00) CEST - Rome
                              </option>
                              <option value="Europe/San_Marino">
                                (GMT+2:00) CEST - San Marino
                              </option>
                              <option value="Europe/Sarajevo">
                                (GMT+2:00) CEST - Sarajevo
                              </option>
                              <option value="Europe/Skopje">
                                (GMT+2:00) CEST - Skopje
                              </option>
                              <option value="Europe/Stockholm">
                                (GMT+2:00) CEST - Stockholm
                              </option>
                              <option value="Europe/Tirane">
                                (GMT+2:00) CEST - Tirane
                              </option>
                              <option value="Africa/Tunis">
                                (GMT+1:00) CET - Tunis
                              </option>
                              <option value="Europe/Vaduz">
                                (GMT+2:00) CEST - Vaduz
                              </option>
                              <option value="Europe/Vatican">
                                (GMT+2:00) CEST - Vatican
                              </option>
                              <option value="Europe/Vienna">
                                (GMT+2:00) CEST - Vienna
                              </option>
                              <option value="Europe/Warsaw">
                                (GMT+2:00) CEST - Warsaw
                              </option>
                              <option value="Europe/Zagreb">
                                (GMT+2:00) CEST - Zagreb
                              </option>
                              <option value="Europe/Zurich">
                                (GMT+2:00) CEST - Zurich
                              </option>
                              <option value="Asia/Amman">
                                (GMT+3:00) EEST - Amman
                              </option>
                              <option value="Europe/Athens">
                                (GMT+3:00) EEST - Athens
                              </option>
                              <option value="Asia/Beirut">
                                (GMT+3:00) EEST - Beirut
                              </option>
                              <option value="Africa/Blantyre">
                                (GMT+2:00) CAT - Blantyre
                              </option>
                              <option value="Europe/Bucharest">
                                (GMT+3:00) EEST - Bucharest
                              </option>
                              <option value="Africa/Bujumbura">
                                (GMT+2:00) CAT - Bujumbura
                              </option>
                              <option value="Africa/Cairo">
                                (GMT+2:00) EET - Cairo
                              </option>
                              <option value="Europe/Chisinau">
                                (GMT+3:00) EEST - Chisinau
                              </option>
                              <option value="Asia/Damascus">
                                (GMT+3:00) EEST - Damascus
                              </option>
                              <option value="Asia/Famagusta">
                                (GMT+3:00) GMT+03:00 - Famagusta
                              </option>
                              <option value="Africa/Gaborone">
                                (GMT+2:00) CAT - Gaborone
                              </option>
                              <option value="Asia/Gaza">
                                (GMT+3:00) EEST - Gaza
                              </option>
                              <option value="Africa/Harare">
                                (GMT+2:00) CAT - Harare
                              </option>
                              <option value="Asia/Hebron">
                                (GMT+3:00) EEST - Hebron
                              </option>
                              <option value="Europe/Helsinki">
                                (GMT+3:00) EEST - Helsinki
                              </option>
                              <option value="Asia/Jerusalem">
                                (GMT+3:00) IDT - Jerusalem
                              </option>
                              <option value="Africa/Johannesburg">
                                (GMT+2:00) SAST - Johannesburg
                              </option>
                              <option value="Europe/Kaliningrad">
                                (GMT+2:00) EET - Kaliningrad
                              </option>
                              <option value="Africa/Khartoum">
                                (GMT+2:00) CAT - Khartoum
                              </option>
                              <option value="Europe/Kiev" selected="selected">
                                (GMT+3:00) EEST - Kiev
                              </option>
                              <option value="Africa/Kigali">
                                (GMT+2:00) CAT - Kigali
                              </option>
                              <option value="Africa/Lubumbashi">
                                (GMT+2:00) CAT - Lubumbashi
                              </option>
                              <option value="Africa/Lusaka">
                                (GMT+2:00) CAT - Lusaka
                              </option>
                              <option value="Africa/Maputo">
                                (GMT+2:00) CAT - Maputo
                              </option>
                              <option value="Europe/Mariehamn">
                                (GMT+3:00) EEST - Mariehamn
                              </option>
                              <option value="Africa/Maseru">
                                (GMT+2:00) SAST - Maseru
                              </option>
                              <option value="Africa/Mbabane">
                                (GMT+2:00) SAST - Mbabane
                              </option>
                              <option value="Asia/Nicosia">
                                (GMT+3:00) EEST - Nicosia
                              </option>
                              <option value="Europe/Nicosia">
                                (GMT+3:00) EEST - Nicosia
                              </option>
                              <option value="Europe/Riga">
                                (GMT+3:00) EEST - Riga
                              </option>
                              <option value="Europe/Sofia">
                                (GMT+3:00) EEST - Sofia
                              </option>
                              <option value="Europe/Tallinn">
                                (GMT+3:00) EEST - Tallinn
                              </option>
                              <option value="Asia/Tel_Aviv">
                                (GMT+3:00) IDT - Tel Aviv
                              </option>
                              <option value="Europe/Tiraspol">
                                (GMT+3:00) EEST - Tiraspol
                              </option>
                              <option value="Africa/Tripoli">
                                (GMT+2:00) EET - Tripoli
                              </option>
                              <option value="Europe/Uzhgorod">
                                (GMT+3:00) EEST - Uzhgorod
                              </option>
                              <option value="Europe/Vilnius">
                                (GMT+3:00) EEST - Vilnius
                              </option>
                              <option value="Africa/Windhoek">
                                (GMT+2:00) CAT - Windhoek
                              </option>
                              <option value="Europe/Zaporozhye">
                                (GMT+3:00) EEST - Zaporozhye
                              </option>
                              <option value="Africa/Addis_Ababa">
                                (GMT+3:00) EAT - Addis Ababa
                              </option>
                              <option value="Asia/Aden">
                                (GMT+3:00) AST - Aden
                              </option>
                              <option value="Indian/Antananarivo">
                                (GMT+3:00) EAT - Antananarivo
                              </option>
                              <option value="Africa/Asmara">
                                (GMT+3:00) EAT - Asmara
                              </option>
                              <option value="Africa/Asmera">
                                (GMT+3:00) EAT - Asmera
                              </option>
                              <option value="Asia/Baghdad">
                                (GMT+3:00) AST - Baghdad
                              </option>
                              <option value="Asia/Bahrain">
                                (GMT+3:00) AST - Bahrain
                              </option>
                              <option value="Indian/Comoro">
                                (GMT+3:00) EAT - Comoro
                              </option>
                              <option value="Africa/Dar_es_Salaam">
                                (GMT+3:00) EAT - Dar es Salaam
                              </option>
                              <option value="Africa/Djibouti">
                                (GMT+3:00) EAT - Djibouti
                              </option>
                              <option value="Asia/Istanbul">
                                (GMT+3:00) EET - Istanbul
                              </option>
                              <option value="Europe/Istanbul">
                                (GMT+3:00) EET - Istanbul
                              </option>
                              <option value="Africa/Juba">
                                (GMT+3:00) EAT - Juba
                              </option>
                              <option value="Africa/Kampala">
                                (GMT+3:00) EAT - Kampala
                              </option>
                              <option value="Europe/Kirov">
                                (GMT+3:00) GMT+03:00 - Kirov
                              </option>
                              <option value="Asia/Kuwait">
                                (GMT+3:00) AST - Kuwait
                              </option>
                              <option value="Indian/Mayotte">
                                (GMT+3:00) EAT - Mayotte
                              </option>
                              <option value="Europe/Minsk">
                                (GMT+3:00) MSK - Minsk
                              </option>
                              <option value="Africa/Mogadishu">
                                (GMT+3:00) EAT - Mogadishu
                              </option>
                              <option value="Europe/Moscow">
                                (GMT+3:00) MSK - Moscow
                              </option>
                              <option value="Africa/Nairobi">
                                (GMT+3:00) EAT - Nairobi
                              </option>
                              <option value="Asia/Qatar">
                                (GMT+3:00) AST - Qatar
                              </option>
                              <option value="Asia/Riyadh">
                                (GMT+3:00) AST - Riyadh
                              </option>
                              <option value="Europe/Simferopol">
                                (GMT+3:00) MSK - Simferopol
                              </option>
                              <option value="Asia/Tehran">
                                (GMT+4:30) IRDT - Tehran
                              </option>
                              <option value="Europe/Astrakhan">
                                (GMT+4:00) GMT+04:00 - Astrakhan
                              </option>
                              <option value="Asia/Baku">
                                (GMT+4:00) AZT - Baku
                              </option>
                              <option value="Asia/Dubai">
                                (GMT+4:00) GST - Dubai
                              </option>
                              <option value="Indian/Mahe">
                                (GMT+4:00) SCT - Mahe
                              </option>
                              <option value="Indian/Mauritius">
                                (GMT+4:00) MUT - Mauritius
                              </option>
                              <option value="Asia/Muscat">
                                (GMT+4:00) GST - Muscat
                              </option>
                              <option value="Indian/Reunion">
                                (GMT+4:00) RET - Reunion
                              </option>
                              <option value="Europe/Samara">
                                (GMT+4:00) SAMT - Samara
                              </option>
                              <option value="Europe/Saratov">
                                (GMT+4:00) GMT+04:00 - Saratov
                              </option>
                              <option value="Asia/Tbilisi">
                                (GMT+4:00) GET - Tbilisi
                              </option>
                              <option value="Europe/Ulyanovsk">
                                (GMT+4:00) GMT+04:00 - Ulyanovsk
                              </option>
                              <option value="Europe/Volgograd">
                                (GMT+4:00) MSK - Volgograd
                              </option>
                              <option value="Asia/Yerevan">
                                (GMT+4:00) AMT - Yerevan
                              </option>
                              <option value="Asia/Kabul">
                                (GMT+4:30) AFT - Kabul
                              </option>
                              <option value="Asia/Aqtau">
                                (GMT+5:00) AQTT - Aqtau
                              </option>
                              <option value="Asia/Aqtobe">
                                (GMT+5:00) AQTT - Aqtobe
                              </option>
                              <option value="Asia/Ashgabat">
                                (GMT+5:00) TMT - Ashgabat
                              </option>
                              <option value="Asia/Ashkhabad">
                                (GMT+5:00) TMT - Ashkhabad
                              </option>
                              <option value="Asia/Atyrau">
                                (GMT+5:00) GMT+05:00 - Atyrau
                              </option>
                              <option value="Asia/Dushanbe">
                                (GMT+5:00) TJT - Dushanbe
                              </option>
                              <option value="Asia/Karachi">
                                (GMT+5:00) PKT - Karachi
                              </option>
                              <option value="Indian/Kerguelen">
                                (GMT+5:00) TFT - Kerguelen
                              </option>
                              <option value="Indian/Maldives">
                                (GMT+5:00) MVT - Maldives
                              </option>
                              <option value="Asia/Oral">
                                (GMT+5:00) ORAT - Oral
                              </option>
                              <option value="Asia/Qyzylorda">
                                (GMT+5:00) QYZT - Qyzylorda
                              </option>
                              <option value="Asia/Samarkand">
                                (GMT+5:00) UZT - Samarkand
                              </option>
                              <option value="Asia/Tashkent">
                                (GMT+5:00) UZT - Tashkent
                              </option>
                              <option value="Asia/Yekaterinburg">
                                (GMT+5:00) YEKT - Yekaterinburg
                              </option>
                              <option value="Asia/Calcutta">
                                (GMT+5:30) IST - Calcutta
                              </option>
                              <option value="Asia/Colombo">
                                (GMT+5:30) IST - Colombo
                              </option>
                              <option value="Asia/Kolkata">
                                (GMT+5:30) IST - Kolkata
                              </option>
                              <option value="Asia/Kathmandu">
                                (GMT+5:45) NPT - Kathmandu
                              </option>
                              <option value="Asia/Katmandu">
                                (GMT+5:45) NPT - Katmandu
                              </option>
                              <option value="Asia/Almaty">
                                (GMT+6:00) ALMT - Almaty
                              </option>
                              <option value="Asia/Bishkek">
                                (GMT+6:00) KGT - Bishkek
                              </option>
                              <option value="Indian/Chagos">
                                (GMT+6:00) IOT - Chagos
                              </option>
                              <option value="Asia/Dacca">
                                (GMT+6:00) BDT - Dacca
                              </option>
                              <option value="Asia/Dhaka">
                                (GMT+6:00) BDT - Dhaka
                              </option>
                              <option value="Asia/Kashgar">
                                (GMT+6:00) XJT - Kashgar
                              </option>
                              <option value="Asia/Omsk">
                                (GMT+6:00) OMST - Omsk
                              </option>
                              <option value="Asia/Qostanay">
                                (GMT+6:00) QOST - Qostanay
                              </option>
                              <option value="Asia/Thimbu">
                                (GMT+6:00) BTT - Thimbu
                              </option>
                              <option value="Asia/Thimphu">
                                (GMT+6:00) BTT - Thimphu
                              </option>
                              <option value="Asia/Urumqi">
                                (GMT+6:00) XJT - Urumqi
                              </option>
                              <option value="Indian/Cocos">
                                (GMT+6:30) CCT - Cocos
                              </option>
                              <option value="Asia/Rangoon">
                                (GMT+6:30) MMT - Rangoon
                              </option>
                              <option value="Asia/Yangon">
                                (GMT+6:30) MMT - Yangon
                              </option>
                              <option value="Asia/Bangkok">
                                (GMT+7:00) ICT - Bangkok
                              </option>
                              <option value="Asia/Barnaul">
                                (GMT+7:00) GMT+07:00 - Barnaul
                              </option>
                              <option value="Indian/Christmas">
                                (GMT+7:00) CXT - Christmas
                              </option>
                              <option value="Asia/Ho_Chi_Minh">
                                (GMT+7:00) ICT - Ho Chi Minh
                              </option>
                              <option value="Asia/Hovd">
                                (GMT+7:00) HOVT - Hovd
                              </option>
                              <option value="Asia/Jakarta">
                                (GMT+7:00) WIB - Jakarta
                              </option>
                              <option value="Asia/Krasnoyarsk">
                                (GMT+7:00) KRAT - Krasnoyarsk
                              </option>
                              <option value="Asia/Novokuznetsk">
                                (GMT+7:00) KRAT - Novokuznetsk
                              </option>
                              <option value="Asia/Novosibirsk">
                                (GMT+7:00) NOVT - Novosibirsk
                              </option>
                              <option value="Asia/Phnom_Penh">
                                (GMT+7:00) ICT - Phnom Penh
                              </option>
                              <option value="Asia/Pontianak">
                                (GMT+7:00) WIB - Pontianak
                              </option>
                              <option value="Asia/Saigon">
                                (GMT+7:00) ICT - Saigon
                              </option>
                              <option value="Asia/Tomsk">
                                (GMT+7:00) GMT+07:00 - Tomsk
                              </option>
                              <option value="Asia/Vientiane">
                                (GMT+7:00) ICT - Vientiane
                              </option>
                              <option value="Asia/Brunei">
                                (GMT+8:00) BNT - Brunei
                              </option>
                              <option value="Asia/Choibalsan">
                                (GMT+8:00) CHOT - Choibalsan
                              </option>
                              <option value="Asia/Chongqing">
                                (GMT+8:00) CST - Chongqing
                              </option>
                              <option value="Asia/Chungking">
                                (GMT+8:00) CST - Chungking
                              </option>
                              <option value="Asia/Harbin">
                                (GMT+8:00) CST - Harbin
                              </option>
                              <option value="Asia/Hong_Kong">
                                (GMT+8:00) HKT - Hong Kong
                              </option>
                              <option value="Asia/Irkutsk">
                                (GMT+8:00) IRKT - Irkutsk
                              </option>
                              <option value="Asia/Kuala_Lumpur">
                                (GMT+8:00) MYT - Kuala Lumpur
                              </option>
                              <option value="Asia/Kuching">
                                (GMT+8:00) MYT - Kuching
                              </option>
                              <option value="Asia/Macao">
                                (GMT+8:00) CST - Macao
                              </option>
                              <option value="Asia/Macau">
                                (GMT+8:00) CST - Macau
                              </option>
                              <option value="Asia/Makassar">
                                (GMT+8:00) WITA - Makassar
                              </option>
                              <option value="Asia/Manila">
                                (GMT+8:00) PST - Manila
                              </option>
                              <option value="Australia/Perth">
                                (GMT+8:00) AWST - Perth
                              </option>
                              <option value="Asia/Shanghai">
                                (GMT+8:00) CST - Shanghai
                              </option>
                              <option value="Asia/Singapore">
                                (GMT+8:00) SGT - Singapore
                              </option>
                              <option value="Asia/Taipei">
                                (GMT+8:00) CST - Taipei
                              </option>
                              <option value="Asia/Ujung_Pandang">
                                (GMT+8:00) WITA - Ujung Pandang
                              </option>
                              <option value="Asia/Ulaanbaatar">
                                (GMT+8:00) ULAT - Ulaanbaatar
                              </option>
                              <option value="Asia/Ulan_Bator">
                                (GMT+8:00) ULAT - Ulan Bator
                              </option>
                              <option value="Australia/West">
                                (GMT+8:00) AWST - West
                              </option>
                              <option value="Australia/Eucla">
                                (GMT+8:45) ACWST - Eucla
                              </option>
                              <option value="Asia/Chita">
                                (GMT+9:00) YAKT - Chita
                              </option>
                              <option value="Asia/Dili">
                                (GMT+9:00) TLT - Dili
                              </option>
                              <option value="Asia/Jayapura">
                                (GMT+9:00) WIT - Jayapura
                              </option>
                              <option value="Asia/Khandyga">
                                (GMT+9:00) YAKT - Khandyga
                              </option>
                              <option value="Pacific/Palau">
                                (GMT+9:00) PWT - Palau
                              </option>
                              <option value="Asia/Pyongyang">
                                (GMT+9:00) KST - Pyongyang
                              </option>
                              <option value="Asia/Seoul">
                                (GMT+9:00) KST - Seoul
                              </option>
                              <option value="Asia/Tokyo">
                                (GMT+9:00) JST - Tokyo
                              </option>
                              <option value="Asia/Yakutsk">
                                (GMT+9:00) YAKT - Yakutsk
                              </option>
                              <option value="Australia/Adelaide">
                                (GMT+9:30) ACST - Adelaide
                              </option>
                              <option value="Australia/Broken_Hill">
                                (GMT+9:30) ACST - Broken Hill
                              </option>
                              <option value="Australia/Darwin">
                                (GMT+9:30) ACST - Darwin
                              </option>
                              <option value="Australia/North">
                                (GMT+9:30) ACST - North
                              </option>
                              <option value="Australia/South">
                                (GMT+9:30) ACST - South
                              </option>
                              <option value="Australia/Yancowinna">
                                (GMT+9:30) ACST - Yancowinna
                              </option>
                              <option value="Australia/ACT">
                                (GMT+10:00) AEST - ACT
                              </option>
                              <option value="Australia/Brisbane">
                                (GMT+10:00) AEST - Brisbane
                              </option>
                              <option value="Australia/Canberra">
                                (GMT+10:00) AEST - Canberra
                              </option>
                              <option value="Pacific/Chuuk">
                                (GMT+10:00) CHUT - Chuuk
                              </option>
                              <option value="Australia/Currie">
                                (GMT+10:00) AEST - Currie
                              </option>
                              <option value="Pacific/Guam">
                                (GMT+10:00) ChST - Guam
                              </option>
                              <option value="Australia/Hobart">
                                (GMT+10:00) AEST - Hobart
                              </option>
                              <option value="Australia/Lindeman">
                                (GMT+10:00) AEST - Lindeman
                              </option>
                              <option value="Australia/Melbourne">
                                (GMT+10:00) AEST - Melbourne
                              </option>
                              <option value="Australia/NSW">
                                (GMT+10:00) AEST - NSW
                              </option>
                              <option value="Pacific/Port_Moresby">
                                (GMT+10:00) PGT - Port Moresby
                              </option>
                              <option value="Australia/Queensland">
                                (GMT+10:00) AEST - Queensland
                              </option>
                              <option value="Pacific/Saipan">
                                (GMT+10:00) ChST - Saipan
                              </option>
                              <option value="Australia/Sydney">
                                (GMT+10:00) AEST - Sydney
                              </option>
                              <option value="Australia/Tasmania">
                                (GMT+10:00) AEST - Tasmania
                              </option>
                              <option value="Pacific/Truk">
                                (GMT+10:00) CHUT - Truk
                              </option>
                              <option value="Asia/Ust-Nera">
                                (GMT+10:00) VLAT - Ust-Nera
                              </option>
                              <option value="Australia/Victoria">
                                (GMT+10:00) AEST - Victoria
                              </option>
                              <option value="Asia/Vladivostok">
                                (GMT+10:00) VLAT - Vladivostok
                              </option>
                              <option value="Pacific/Yap">
                                (GMT+10:00) CHUT - Yap
                              </option>
                              <option value="Australia/LHI">
                                (GMT+10:30) LHST - LHI
                              </option>
                              <option value="Australia/Lord_Howe">
                                (GMT+10:30) LHST - Lord Howe
                              </option>
                              <option value="Pacific/Bougainville">
                                (GMT+11:00) BST - Bougainville
                              </option>
                              <option value="Pacific/Efate">
                                (GMT+11:00) VUT - Efate
                              </option>
                              <option value="Pacific/Guadalcanal">
                                (GMT+11:00) SBT - Guadalcanal
                              </option>
                              <option value="Pacific/Kosrae">
                                (GMT+11:00) KOST - Kosrae
                              </option>
                              <option value="Asia/Magadan">
                                (GMT+11:00) MAGT - Magadan
                              </option>
                              <option value="Pacific/Norfolk">
                                (GMT+11:00) NFT - Norfolk
                              </option>
                              <option value="Pacific/Noumea">
                                (GMT+11:00) NCT - Noumea
                              </option>
                              <option value="Pacific/Pohnpei">
                                (GMT+11:00) PONT - Pohnpei
                              </option>
                              <option value="Pacific/Ponape">
                                (GMT+11:00) PONT - Ponape
                              </option>
                              <option value="Asia/Sakhalin">
                                (GMT+11:00) SAKT - Sakhalin
                              </option>
                              <option value="Asia/Srednekolymsk">
                                (GMT+11:00) SRET - Srednekolymsk
                              </option>
                              <option value="Asia/Anadyr">
                                (GMT+12:00) ANAT - Anadyr
                              </option>
                              <option value="Pacific/Auckland">
                                (GMT+12:00) NZST - Auckland
                              </option>
                              <option value="Pacific/Fiji">
                                (GMT+12:00) FJT - Fiji
                              </option>
                              <option value="Pacific/Funafuti">
                                (GMT+12:00) TVT - Funafuti
                              </option>
                              <option value="Asia/Kamchatka">
                                (GMT+12:00) PETT - Kamchatka
                              </option>
                              <option value="Pacific/Kwajalein">
                                (GMT+12:00) MHT - Kwajalein
                              </option>
                              <option value="Pacific/Majuro">
                                (GMT+12:00) MHT - Majuro
                              </option>
                              <option value="Pacific/Nauru">
                                (GMT+12:00) NRT - Nauru
                              </option>
                              <option value="Pacific/Tarawa">
                                (GMT+12:00) GILT - Tarawa
                              </option>
                              <option value="Pacific/Wake">
                                (GMT+12:00) WAKT - Wake
                              </option>
                              <option value="Pacific/Wallis">
                                (GMT+12:00) WFT - Wallis
                              </option>
                              <option value="Pacific/Chatham">
                                (GMT+12:45) CHAST - Chatham
                              </option>
                              <option value="Pacific/Apia">
                                (GMT+13:00) WSST - Apia
                              </option>
                              <option value="Pacific/Enderbury">
                                (GMT+13:00) PHOT - Enderbury
                              </option>
                              <option value="Pacific/Fakaofo">
                                (GMT+13:00) TKT - Fakaofo
                              </option>
                              <option value="Pacific/Tongatapu">
                                (GMT+13:00) TOT - Tongatapu
                              </option>
                              <option value="Pacific/Kiritimati">
                                (GMT+14:00) LINT - Kiritimati
                              </option>
                            </select>
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td className="name">
                          <p>Birthdate:</p>
                        </td>
                        <td className="value">
                          <p>
                            <select
                              name="bMonth"
                              id="bMonth"
                              onchange="__monthChanged()"
                            >
                              <option value>-Select-</option>
                              <option value={0}>янв</option>
                              <option value={1}>фев</option>
                              <option value={2}>мар</option>
                              <option value={3}>апр</option>
                              <option value={4}>мая</option>
                              <option value={5}>июн</option>
                              <option value={6}>июл</option>
                              <option value={7}>авг</option>
                              <option value={8}>сен</option>
                              <option value={9}>окт</option>
                              <option value={10}>ноя</option>
                              <option value={11}>дек</option>
                            </select>
                            <select name="bDate" id="bDate">
                              <option value>-Select-</option>
                              <option value={1}>1</option>
                              <option value={2}>2</option>
                              <option value={3}>3</option>
                              <option value={4}>4</option>
                              <option value={5}>5</option>
                              <option value={6}>6</option>
                              <option value={7}>7</option>
                              <option value={8}>8</option>
                              <option value={9}>9</option>
                              <option value={10}>10</option>
                              <option value={11}>11</option>
                              <option value={12}>12</option>
                              <option value={13}>13</option>
                              <option value={14}>14</option>
                              <option value={15}>15</option>
                              <option value={16}>16</option>
                              <option value={17}>17</option>
                              <option value={18}>18</option>
                              <option value={19}>19</option>
                              <option value={20}>20</option>
                              <option value={21}>21</option>
                              <option value={22}>22</option>
                              <option value={23}>23</option>
                              <option value={24}>24</option>
                              <option value={25}>25</option>
                              <option value={26}>26</option>
                              <option value={27}>27</option>
                              <option value={28}>28</option>
                              <option value={29}>29</option>
                              <option value={30}>30</option>
                              <option value={31}>31</option>
                            </select>
                            <select
                              name="bYear"
                              id="bYear"
                              onchange="__yearChanged()"
                            >
                              <option value>-Select-</option>
                              <option value={2006}>2006</option>
                              <option value={2005}>2005</option>
                              <option value={2004}>2004</option>
                              <option value={2003}>2003</option>
                              <option value={2002}>2002</option>
                              <option value={2001}>2001</option>
                              <option value={2000}>2000</option>
                              <option value={1999}>1999</option>
                              <option value={1998}>1998</option>
                              <option value={1997}>1997</option>
                              <option value={1996}>1996</option>
                              <option value={1995}>1995</option>
                              <option value={1994}>1994</option>
                              <option value={1993}>1993</option>
                              <option value={1992}>1992</option>
                              <option value={1991}>1991</option>
                              <option value={1990}>1990</option>
                              <option value={1989}>1989</option>
                              <option value={1988}>1988</option>
                              <option value={1987}>1987</option>
                              <option value={1986}>1986</option>
                              <option value={1985}>1985</option>
                              <option value={1984}>1984</option>
                              <option value={1983}>1983</option>
                              <option value={1982}>1982</option>
                              <option value={1981}>1981</option>
                              <option value={1980}>1980</option>
                              <option value={1979}>1979</option>
                              <option value={1978}>1978</option>
                              <option value={1977}>1977</option>
                              <option value={1976}>1976</option>
                              <option value={1975}>1975</option>
                              <option value={1974}>1974</option>
                              <option value={1973}>1973</option>
                              <option value={1972}>1972</option>
                              <option value={1971}>1971</option>
                              <option value={1970}>1970</option>
                              <option value={1969}>1969</option>
                              <option value={1968}>1968</option>
                              <option value={1967}>1967</option>
                              <option value={1966}>1966</option>
                              <option value={1965}>1965</option>
                              <option value={1964}>1964</option>
                              <option value={1963}>1963</option>
                              <option value={1962}>1962</option>
                              <option value={1961}>1961</option>
                              <option value={1960}>1960</option>
                              <option value={1959}>1959</option>
                              <option value={1958}>1958</option>
                              <option value={1957}>1957</option>
                              <option value={1956}>1956</option>
                              <option value={1955}>1955</option>
                              <option value={1954}>1954</option>
                              <option value={1953}>1953</option>
                              <option value={1952}>1952</option>
                              <option value={1951}>1951</option>
                              <option value={1950}>1950</option>
                              <option value={1949}>1949</option>
                              <option value={1948}>1948</option>
                              <option value={1947}>1947</option>
                              <option value={1946}>1946</option>
                              <option value={1945}>1945</option>
                              <option value={1944}>1944</option>
                              <option value={1943}>1943</option>
                              <option value={1942}>1942</option>
                              <option value={1941}>1941</option>
                              <option value={1940}>1940</option>
                              <option value={1939}>1939</option>
                              <option value={1938}>1938</option>
                              <option value={1937}>1937</option>
                              <option value={1936}>1936</option>
                              <option value={1935}>1935</option>
                              <option value={1934}>1934</option>
                              <option value={1933}>1933</option>
                              <option value={1932}>1932</option>
                              <option value={1931}>1931</option>
                              <option value={1930}>1930</option>
                              <option value={1929}>1929</option>
                              <option value={1928}>1928</option>
                              <option value={1927}>1927</option>
                              <option value={1926}>1926</option>
                              <option value={1925}>1925</option>
                              <option value={1924}>1924</option>
                              <option value={1923}>1923</option>
                              <option value={1922}>1922</option>
                              <option value={1921}>1921</option>
                              <option value={1920}>1920</option>
                              <option value={1919}>1919</option>
                              <option value={1918}>1918</option>
                              <option value={1917}>1917</option>
                              <option value={1916}>1916</option>
                              <option value={1915}>1915</option>
                              <option value={1914}>1914</option>
                              <option value={1913}>1913</option>
                              <option value={1912}>1912</option>
                              <option value={1911}>1911</option>
                              <option value={1910}>1910</option>
                              <option value={1909}>1909</option>
                              <option value={1908}>1908</option>
                              <option value={1907}>1907</option>
                              <option value={1906}>1906</option>
                              <option value={1905}>1905</option>
                              <option value={1904}>1904</option>
                              <option value={1903}>1903</option>
                              <option value={1902}>1902</option>
                              <option value={1901}>1901</option>
                              <option value={1900}>1900</option>
                            </select>
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td className="name">
                          <p>Email:</p>
                        </td>
                        <td className="value">
                          <p>
                            <input
                              id="email"
                              name="email"
                              className="tb"
                              onchange="__dataChanged()"
                              type="text"
                              defaultValue="email@mail.com"
                            />
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td className="name">
                          <p>Phone #:</p>
                        </td>
                        <td className="value">
                          <p>
                            <input
                              id="phoneNumber"
                              name="phoneNumber"
                              className="tb"
                              onchange="__dataChanged()"
                              type="text"
                              defaultValue
                              maxLength={40}
                            />
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td className="name">Avatar:</td>
                        <td className="value">
                          <div style={{ float: 'left', paddingTop: 8 }}>
                            <img
                              alt="placeholder"
                              src="https://img.fantrax.com/graphics/blankAvtr.png"
                              title="Avatar Upload"
                              width={80}
                              height={80}
                            />
                          </div>
                          <div
                            style={{
                              float: 'left',
                              padding: '20px 0px 0px 10px',
                            }}
                          >
                            <input
                              type="file"
                              name="avatar"
                              onchange="__dataChanged()"
                            />
                            <br />
                            <span style={{ fontSize: 11 }}>
                              Max. image file size 5 MB
                            </span>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="name">Member Since:</td>
                        <td className="value" colSpan={2}>
                          May 4, 2020
                        </td>
                      </tr>
                      <tr className="hide">
                        <td className="name">
                          <p>
                            <input type="checkbox" name="agreement" />
                          </p>
                        </td>
                        <td className="value">
                          <p>
                            Receive email updates for Fantrax news, promotions,
                            etc.
                          </p>
                        </td>
                      </tr>
                      <tr className="hide">
                        <td className="name">
                          <p>
                            <input type="checkbox" name="agreement" />
                          </p>
                        </td>
                        <td className="value">
                          <p>
                            Receive email updates for scores, standings, etc.
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
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
            <div className="userOptions">
              <div className="formatTitle curve2200 splitBar">
                <h2>Content Settings</h2>
              </div>
              <div className="columnBlockInfo clearfix curve0022">
                <div className="sportsTableBlock sportsTableBlockClean">
                  <table className="userTable curve0022" style={{ width: 750 }}>
                    <tbody>
                      <tr>
                        <td colSpan={3}>
                          <b>PLAYER NEWS</b>
                        </td>
                      </tr>
                      <tr style={{ backgroundColor: '#eeeeee' }}>
                        <td colSpan={3}>
                          <b>MLB</b>
                        </td>
                      </tr>
                      <tr>
                        <td style={{ width: 10 }}>
                          <input
                            type="checkbox"
                            name="playerNewsPrefs|MLB|ROTOWIRE"
                            defaultChecked="checked"
                          />
                        </td>
                        <td style={{ width: 10 }}>
                          <img
                            alt="placeholder"
                            src="https://img.fantrax.com/icons/logo_ROTOWIRE_Sm.png"
                          />
                        </td>
                        <td>&nbsp; &nbsp; Rotowire</td>
                      </tr>
                      <tr>
                        <td style={{ width: 10 }}>
                          <input
                            type="checkbox"
                            name="playerNewsPrefs|MLB|STATS_INC"
                          />
                        </td>
                        <td style={{ width: 10 }}>
                          <img
                            alt="placeholder"
                            src="https://img.fantrax.com/icons/logo_STATS_INC_Sm.png"
                          />
                        </td>
                        <td>&nbsp; &nbsp; Stats</td>
                      </tr>
                      <tr>
                        <td style={{ width: 10 }}>
                          <input
                            type="checkbox"
                            name="playerNewsPrefs|MLB|ROTOBALLER"
                            defaultChecked="checked"
                          />
                        </td>
                        <td style={{ width: 10 }}>
                          <img
                            alt="placeholder"
                            src="https://img.fantrax.com/icons/logo_ROTOBALLER_Sm.png"
                          />
                        </td>
                        <td>&nbsp; &nbsp; RotoBaller</td>
                      </tr>
                      <tr style={{ backgroundColor: '#eeeeee' }}>
                        <td colSpan={3}>
                          <b>NFL</b>
                        </td>
                      </tr>
                      <tr>
                        <td style={{ width: 10 }}>
                          <input
                            type="checkbox"
                            name="playerNewsPrefs|NFL|ROTOWIRE"
                            defaultChecked="checked"
                          />
                        </td>
                        <td style={{ width: 10 }}>
                          <img
                            alt="placeholder"
                            src="https://img.fantrax.com/icons/logo_ROTOWIRE_Sm.png"
                          />
                        </td>
                        <td>&nbsp; &nbsp; Rotowire</td>
                      </tr>
                      <tr>
                        <td style={{ width: 10 }}>
                          <input
                            type="checkbox"
                            name="playerNewsPrefs|NFL|STATS_INC"
                          />
                        </td>
                        <td style={{ width: 10 }}>
                          <img
                            alt="placeholder"
                            src="https://img.fantrax.com/icons/logo_STATS_INC_Sm.png"
                          />
                        </td>
                        <td>&nbsp; &nbsp; Stats</td>
                      </tr>
                      <tr>
                        <td style={{ width: 10 }}>
                          <input
                            type="checkbox"
                            name="playerNewsPrefs|NFL|ROTOBALLER"
                            defaultChecked="checked"
                          />
                        </td>
                        <td style={{ width: 10 }}>
                          <img
                            alt="placeholder"
                            src="https://img.fantrax.com/icons/logo_ROTOBALLER_Sm.png"
                          />
                        </td>
                        <td>&nbsp; &nbsp; RotoBaller</td>
                      </tr>
                      <tr style={{ backgroundColor: '#eeeeee' }}>
                        <td colSpan={3}>
                          <b>NHL</b>
                        </td>
                      </tr>
                      <tr>
                        <td style={{ width: 10 }}>
                          <input
                            type="checkbox"
                            name="playerNewsPrefs|NHL|ROTOWIRE"
                            defaultChecked="checked"
                          />
                        </td>
                        <td style={{ width: 10 }}>
                          <img
                            alt="placeholder"
                            src="https://img.fantrax.com/icons/logo_ROTOWIRE_Sm.png"
                          />
                        </td>
                        <td>&nbsp; &nbsp; Rotowire</td>
                      </tr>
                      <tr>
                        <td style={{ width: 10 }}>
                          <input
                            type="checkbox"
                            name="playerNewsPrefs|NHL|STATS_INC"
                          />
                        </td>
                        <td style={{ width: 10 }}>
                          <img
                            alt="placeholder"
                            src="https://img.fantrax.com/icons/logo_STATS_INC_Sm.png"
                          />
                        </td>
                        <td>&nbsp; &nbsp; Stats</td>
                      </tr>
                      <tr>
                        <td style={{ width: 10 }}>
                          <input
                            type="checkbox"
                            name="playerNewsPrefs|NHL|DOBBER"
                          />
                        </td>
                        <td style={{ width: 10 }}>
                          <img
                            alt="placeholder"
                            src="https://img.fantrax.com/icons/logo_DOBBER_Sm.png"
                          />
                        </td>
                        <td>&nbsp; &nbsp; Dobber</td>
                      </tr>
                      <tr style={{ backgroundColor: '#eeeeee' }}>
                        <td colSpan={3}>
                          <b>NBA</b>
                        </td>
                      </tr>
                      <tr>
                        <td style={{ width: 10 }}>
                          <input
                            type="checkbox"
                            name="playerNewsPrefs|NBA|ROTOWIRE"
                            defaultChecked="checked"
                          />
                        </td>
                        <td style={{ width: 10 }}>
                          <img
                            alt="placeholder"
                            src="https://img.fantrax.com/icons/logo_ROTOWIRE_Sm.png"
                          />
                        </td>
                        <td>&nbsp; &nbsp; Rotowire</td>
                      </tr>
                      <tr>
                        <td style={{ width: 10 }}>
                          <input
                            type="checkbox"
                            name="playerNewsPrefs|NBA|STATS_INC"
                          />
                        </td>
                        <td style={{ width: 10 }}>
                          <img
                            alt="placeholder"
                            src="https://img.fantrax.com/icons/logo_STATS_INC_Sm.png"
                          />
                        </td>
                        <td>&nbsp; &nbsp; Stats</td>
                      </tr>
                      <tr style={{ backgroundColor: '#eeeeee' }}>
                        <td colSpan={3}>
                          <b>NCAAF</b>
                        </td>
                      </tr>
                      <tr>
                        <td style={{ width: 10 }}>
                          <input
                            type="checkbox"
                            name="playerNewsPrefs|NCAAF|ROTOWIRE"
                            defaultChecked="checked"
                          />
                        </td>
                        <td style={{ width: 10 }}>
                          <img
                            alt="placeholder"
                            src="https://img.fantrax.com/icons/logo_ROTOWIRE_Sm.png"
                          />
                        </td>
                        <td>&nbsp; &nbsp; Rotowire</td>
                      </tr>
                      <tr style={{ backgroundColor: '#eeeeee' }}>
                        <td colSpan={3}>
                          <b>NCAAB</b>
                        </td>
                      </tr>
                      <tr>
                        <td style={{ width: 10 }}>
                          <input
                            type="checkbox"
                            name="playerNewsPrefs|NCAAB|ROTOWIRE"
                            defaultChecked="checked"
                          />
                        </td>
                        <td style={{ width: 10 }}>
                          <img
                            alt="placeholder"
                            src="https://img.fantrax.com/icons/logo_ROTOWIRE_Sm.png"
                          />
                        </td>
                        <td>&nbsp; &nbsp; Rotowire</td>
                      </tr>
                      <tr style={{ backgroundColor: '#eeeeee' }}>
                        <td colSpan={3}>
                          <b>PGA</b>
                        </td>
                      </tr>
                      <tr>
                        <td style={{ width: 10 }}>
                          <input
                            type="checkbox"
                            name="playerNewsPrefs|PGA|ROTOWIRE"
                            defaultChecked="checked"
                          />
                        </td>
                        <td style={{ width: 10 }}>
                          <img
                            alt="placeholder"
                            src="https://img.fantrax.com/icons/logo_ROTOWIRE_Sm.png"
                          />
                        </td>
                        <td>&nbsp; &nbsp; Rotowire</td>
                      </tr>
                      <tr>
                        <td style={{ width: 10 }}>
                          <input
                            type="checkbox"
                            name="playerNewsPrefs|PGA|STATS_INC"
                          />
                        </td>
                        <td style={{ width: 10 }}>
                          <img
                            alt="placeholder"
                            src="https://img.fantrax.com/icons/logo_STATS_INC_Sm.png"
                          />
                        </td>
                        <td>&nbsp; &nbsp; Stats</td>
                      </tr>
                      <tr style={{ backgroundColor: '#eeeeee' }}>
                        <td colSpan={3}>
                          <b>NASCAR</b>
                        </td>
                      </tr>
                      <tr>
                        <td style={{ width: 10 }}>
                          <input
                            type="checkbox"
                            name="playerNewsPrefs|NASCAR|ROTOWIRE"
                            defaultChecked="checked"
                          />
                        </td>
                        <td style={{ width: 10 }}>
                          <img
                            alt="placeholder"
                            src="https://img.fantrax.com/icons/logo_ROTOWIRE_Sm.png"
                          />
                        </td>
                        <td>&nbsp; &nbsp; Rotowire</td>
                      </tr>
                      <tr>
                        <td style={{ width: 10 }}>
                          <input
                            type="checkbox"
                            name="playerNewsPrefs|NASCAR|STATS_INC"
                          />
                        </td>
                        <td style={{ width: 10 }}>
                          <img
                            alt="placeholder"
                            src="https://img.fantrax.com/icons/logo_STATS_INC_Sm.png"
                          />
                        </td>
                        <td>&nbsp; &nbsp; Stats</td>
                      </tr>
                      <tr style={{ backgroundColor: '#eeeeee' }}>
                        <td colSpan={3}>
                          <b>Premier League</b>
                        </td>
                      </tr>
                      <tr>
                        <td style={{ width: 10 }}>
                          <input
                            type="checkbox"
                            name="playerNewsPrefs|EPL|ROTOWIRE"
                            defaultChecked="checked"
                          />
                        </td>
                        <td style={{ width: 10 }}>
                          <img
                            alt="placeholder"
                            src="https://img.fantrax.com/icons/logo_ROTOWIRE_Sm.png"
                          />
                        </td>
                        <td>&nbsp; &nbsp; Rotowire</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="filterButton curve2" onclick="__doSubmit()">
              <span className="curve2">Save</span>
            </div>
            <div style={{ clear: 'both' }} />
          </div>
        </form>
      </div>
      <div id="panelAccount" style={{}}>
        <style
          dangerouslySetInnerHTML={{
            __html:
              '\ntr.refunded {background-color:#dddddd}\ntr.failed {background-color:#ffebeb}\ntr.pending {background-color:#ffffcc}\ntr.deleted {background-color:#ffc0c0}\ntr.notVTU {color:#888888;}\n',
          }}
        />
        <div id="dvRefundAlert" style={{ display: 'none' }}>
          Are you sure you want to refund{' '}
          <span id="spnRefundAmount" style={{ fontWeight: 'bold' }} />?<br />
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
                    href="/newui/user/payment.go?qxw=Q0EQMWOHm5KfdsOrlCI1OuzCwNfH02y9j/EGo6wiKV8&type=D&pr=0&userInfo=true"
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
                    href="/newui/user/withdrawFunds.go?qxw=Q0EQMWOHm5KfdsOrlCI1OuzCwNfH02y9j/EGo6wiKV8"
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
                    href="/newui/user/editCcOnFile.go?qxw=Q0EQMWOHm5KfdsOrlCI1OuzCwNfH02y9j/EGo6wiKV8"
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

export default AccountTab;
