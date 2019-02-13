import React from 'react';
import ReactDOM from 'react-dom';
//import alt from './alt';
import MyWidget from "./app/Widget";
//import MyStore from './stores/MyStore';
//import Emitter from "./emitters/Emitter";
import uniqueid from 'uniqueid';
//import actions from './actions/actions';

let NSconfig = null;

export default {
  config: function (config) {
    NSconfig = config;
  },
  widgets: {
    myWidget: {
      new: (config) => {
        let uid = uniqueid({ prefix: 'widget_ns_' });
        return {
          render: (args) => {
            ReactDOM.render(
              <MyWidget
                apiKey={args.apiKey || config.apiKey || NSconfig.apiKey}
                authId={args.authId || config.authId || NSconfig.authId}
                locale={args.locale || config.locale || NSconfig.locale}
                selector={config.selector || NSconfig.selector}
              />, document.querySelector(config.selector)
            );
          },
          on: (event, callback) => {
            console.log("on event");
            callback();
            //Emitter.on.apply(Emitter, [uid + "." + event, callback]);
          },

          off: (event, callback) => {
            console.log("off event");
            //Emitter.removeListener.apply(Emitter, [uid + "." + event, callback]);
          },

          unmount() {
            ReactDOM.unmountComponentAtNode(document.querySelector(config.selector));
            //alt.recycle(MyStore);
            //Emitter.removeAllListeners();
          },

          getState: () => {
            console.log("return store state")
            //return MyStore.getState()[uid];
          },

          /*
          back: () => {
            actions.back(uid);
          },

          forward: () => {

            actions.forward(uid);

          },
          */
        };
      },
    },
  },
};
