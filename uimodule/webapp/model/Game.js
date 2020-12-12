sap.ui.define([
    "sap/ui/base/Object",
    "./state/InitialState",
    "./state/PlayingState",
    "./state/GuessingState",
    "./state/ResultState",
], function (Object, InitialState, PlayingState, GuessingState, ResultState) {
    "use strict";
    return Object.extend("net.konzult.memory.game.model.Game", {
        currentState: null,
        changeState: function (newState) {
            this.currentState = this.states[newState];
            this.currentState.init();
            this.refresh();
            this.currentState.start();
        },
        refresh: function () {
            this.store.screenState = this.currentState.getScreenState();
            this.store.refresh();
        },
        constructor: function (store) {
            this.states = {
                init: new InitialState(this),
                playing: new PlayingState(this),
                guessing: new GuessingState(this),
                result: new ResultState(this)
            };

            this.store = store;
            this.changeState("init");
        },
        getModel: function () {
            return this.store.getModel();
        },
        onSubmit: function () {
            this.currentState.onSubmit()
        },
        play: function (number = this.store.number) {
            return new Promise(resolve => {
                const { delay, rate } = this.store.settings;
                if (number && number.length > 0) {
                    responsiveVoice.speak(" " + number[0], "Czech Female", {
                        rate,
                        onend: () => setTimeout(() => {
                            resolve(this.play(number.slice(1)));
                        }, delay)
                    });
                } else {
                    resolve("playback completed");
                }
            })
        },
        newNumber: function () {
            this.store.number = this._generateNumber(this.store.settings.digits);
        },
        _generateNumber: function (length) {
            return Array(length)
              .fill(null)
              .reduce(prev => prev + Math.floor(Math.random() * 10), "");
          }, 
    });
}); 