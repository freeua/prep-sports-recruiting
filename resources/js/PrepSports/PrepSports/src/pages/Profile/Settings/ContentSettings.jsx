import React from 'react';

const ContentSettings = () => {
  return (
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
                  <img src="https://img.fantrax.com/icons/logo_ROTOWIRE_Sm.png" />
                </td>
                <td>&nbsp; &nbsp; Rotowire</td>
              </tr>
              <tr>
                <td style={{ width: 10 }}>
                  <input type="checkbox" name="playerNewsPrefs|MLB|STATS_INC" />
                </td>
                <td style={{ width: 10 }}>
                  <img src="https://img.fantrax.com/icons/logo_STATS_INC_Sm.png" />
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
                  <img src="https://img.fantrax.com/icons/logo_ROTOBALLER_Sm.png" />
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
                  <img src="https://img.fantrax.com/icons/logo_ROTOWIRE_Sm.png" />
                </td>
                <td>&nbsp; &nbsp; Rotowire</td>
              </tr>
              <tr>
                <td style={{ width: 10 }}>
                  <input type="checkbox" name="playerNewsPrefs|NFL|STATS_INC" />
                </td>
                <td style={{ width: 10 }}>
                  <img src="https://img.fantrax.com/icons/logo_STATS_INC_Sm.png" />
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
                  <img src="https://img.fantrax.com/icons/logo_ROTOBALLER_Sm.png" />
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
                  <img src="https://img.fantrax.com/icons/logo_ROTOWIRE_Sm.png" />
                </td>
                <td>&nbsp; &nbsp; Rotowire</td>
              </tr>
              <tr>
                <td style={{ width: 10 }}>
                  <input type="checkbox" name="playerNewsPrefs|NHL|STATS_INC" />
                </td>
                <td style={{ width: 10 }}>
                  <img src="https://img.fantrax.com/icons/logo_STATS_INC_Sm.png" />
                </td>
                <td>&nbsp; &nbsp; Stats</td>
              </tr>
              <tr>
                <td style={{ width: 10 }}>
                  <input type="checkbox" name="playerNewsPrefs|NHL|DOBBER" />
                </td>
                <td style={{ width: 10 }}>
                  <img src="https://img.fantrax.com/icons/logo_DOBBER_Sm.png" />
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
                  <img src="https://img.fantrax.com/icons/logo_ROTOWIRE_Sm.png" />
                </td>
                <td>&nbsp; &nbsp; Rotowire</td>
              </tr>
              <tr>
                <td style={{ width: 10 }}>
                  <input type="checkbox" name="playerNewsPrefs|NBA|STATS_INC" />
                </td>
                <td style={{ width: 10 }}>
                  <img src="https://img.fantrax.com/icons/logo_STATS_INC_Sm.png" />
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
                  <img src="https://img.fantrax.com/icons/logo_ROTOWIRE_Sm.png" />
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
                  <img src="https://img.fantrax.com/icons/logo_ROTOWIRE_Sm.png" />
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
                  <img src="https://img.fantrax.com/icons/logo_ROTOWIRE_Sm.png" />
                </td>
                <td>&nbsp; &nbsp; Rotowire</td>
              </tr>
              <tr>
                <td style={{ width: 10 }}>
                  <input type="checkbox" name="playerNewsPrefs|PGA|STATS_INC" />
                </td>
                <td style={{ width: 10 }}>
                  <img src="https://img.fantrax.com/icons/logo_STATS_INC_Sm.png" />
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
                  <img src="https://img.fantrax.com/icons/logo_ROTOWIRE_Sm.png" />
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
                  <img src="https://img.fantrax.com/icons/logo_STATS_INC_Sm.png" />
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
                  <img src="https://img.fantrax.com/icons/logo_ROTOWIRE_Sm.png" />
                </td>
                <td>&nbsp; &nbsp; Rotowire</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ContentSettings;
