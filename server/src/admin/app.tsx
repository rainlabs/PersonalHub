import TelegramButton from "./extensions/components/telegram.button";

export default {
    config: {
        locales: [
            'ru',
            'de'
        ],
    },
    bootstrap(app) {
        console.log(app);
        app.injectContentManagerComponent("editView", "right-links", {
            name: "TelegramButton",
            Component: TelegramButton,
        });
    },
};
