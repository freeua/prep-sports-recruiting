import React from 'react';

const ChatExpand = () => {
  return (
    <section style={{ display: 'flex' }}>
      <bottom-nav-chat class="ng-star-inserted">
        <div>
          <div class="content__header">
            <div class="content__header__title">
              <h1>Chat</h1>
            </div>
          </div>
          <div class="bottom-nav-chat__no-chat ng-star-inserted">
            <alert icon="new_releases" type="accent">
              <div class="alert alert--accent">
                <div class="alert__icon ng-star-inserted">
                  <i class="icons icons--medium ng-star-inserted">
                    new_releases
                  </i>
                </div>
                <article>
                  <h6 class="alert__spacing">
                    <div alert-heading="">Not a league screen!</div>
                  </h6>
                  <div class="alert__spacing ng-star-inserted">
                    <div alert-content="">
                      You need to be on a fantasy league page to use the chat
                      <span class="font-weight--400">
                        however the new chat system is coming soon...
                      </span>
                    </div>
                  </div>
                  {/* eslint-disable-next-line */}
                  <a class="alert__click"></a>
                </article>
              </div>
            </alert>
          </div>
        </div>
        <div class="bottom-nav-chat form-group form-group--compact"></div>
      </bottom-nav-chat>
    </section>
  );
};

export default ChatExpand;
