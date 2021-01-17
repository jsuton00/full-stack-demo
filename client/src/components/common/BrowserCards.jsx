import React from 'react';
import { browsers } from '../../utils/browsers';
import { DownloadButton } from './Buttons';

const BrowserCards = () => {
  return (
    <div className="browser-card-deck card-deck row">
      {browsers.length > 0 &&
        browsers.map((b, i) => {
          return (
            <div
              key={i}
              id={`browser-card-${b.name.toLowerCase()}`}
              className={`browser-card browser-card-${b.name.toLowerCase()} card`}
            >
              <img
                src={b.logo}
                alt={`Install on ${b.name}`}
                className="browser-card-img card-img-top"
              />
              <div className="browser-card-body card-body">
                <h5 className="browser-card-title card-title">
                  Add to {b.name}
                </h5>
                <p className="browser-card-text card-text">
                  Minimum version {b.minVersion}
                </p>
              </div>
              <div className="browser-card-footer card-footer">
                <DownloadButton
                  download={() => window.open(b.linkUrl, '_blank')}
                />
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default BrowserCards;
