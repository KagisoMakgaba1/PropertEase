(function(self, ns){
    var GENERIC_BUNDLE_URL = "https://fast.appcues.com/generic/main/6.5.0/appcues.main.e34a1fba59dc2bf5a6c37a723a3f2a39a272c0eb.js";
    var ACCOUNT_DETAILS = {"GENERIC_BUNDLE_DOMAIN":"https://fast.appcues.com","GENERIC_BUNDLE_PATH":"/generic/main/6.5.0/appcues.main.e34a1fba59dc2bf5a6c37a723a3f2a39a272c0eb.js","RELEASE_ID":"e34a1fba59dc2bf5a6c37a723a3f2a39a272c0eb","VERSION":"6.5.0","account":{"buffer":0,"gates":{"enableCTTEventIntegrations":false,"enableClientSideEventIntegrations":false},"isTrial":false,"isTrialExpired":true,"skipAutoProperties":false,"stripQueryParams":null,"stripePlanId":"31843-growth-yearly"},"accountId":"116403","custom_events":[{"accountId":null,"buildUrl":null,"createdAt":null,"createdBy":null,"disabledAt":null,"disabledBy":null,"enabled":null,"enabledAt":null,"enabledBy":null,"id":null,"name":"appcues_custom:editor/some-popover/clicked-x-to-close","state":"ENABLED","targets":[{"event":"click","selector":{"selector":".checkmark-circle-close-filled "}}],"updatedAt":null,"updatedBy":null,"urls":["/app/presentation"]},{"accountId":null,"buildUrl":null,"createdAt":null,"createdBy":null,"disabledAt":null,"disabledBy":null,"enabled":null,"enabledAt":null,"enabledBy":null,"id":null,"name":"appcues_custom:slide-picker/dismiss-via-slide-click","state":"ENABLED","targets":[{"event":"click","selector":{"selector":"#read-layer .slide-selection-helper "}}],"updatedAt":null,"updatedBy":null,"urls":["/app/presentation/*"]},{"accountId":null,"buildUrl":null,"createdAt":null,"createdBy":null,"disabledAt":null,"disabledBy":null,"enabled":null,"enabledAt":null,"enabledBy":null,"id":null,"name":"appcues_custom:editor/open-table-insert","state":"ENABLED","targets":[{"event":"click","selector":{"selector":"[data-test-id=\"title-bar-add-table-btn\"] .labeled-icon-button-inner "}}],"updatedAt":null,"updatedBy":null,"urls":["/app/presentation/*"]},{"accountId":null,"buildUrl":null,"createdAt":null,"createdBy":null,"disabledAt":null,"disabledBy":null,"enabled":null,"enabledAt":null,"enabledBy":null,"id":null,"name":"appcues_custom:editor/open-chart-picker","state":"ENABLED","targets":[{"event":"click","selector":{"selector":"[data-test-id=\"title-bar-add-chart-btn\"] .labeled-icon-button-inner "}}],"updatedAt":null,"updatedBy":null,"urls":["/app/presentation/*"]},{"accountId":null,"buildUrl":null,"createdAt":null,"createdBy":null,"disabledAt":null,"disabledBy":null,"enabled":null,"enabledAt":null,"enabledBy":null,"id":null,"name":"appcues_custom:editor/open-sticker-picker","state":"ENABLED","targets":[{"event":"click","selector":{"selector":"[data-test-id=\"title-bar-add-sticker-btn\"] .labeled-icon-button-inner "}}],"updatedAt":null,"updatedBy":null,"urls":["/app/presentation/.*"]},{"accountId":null,"buildUrl":null,"createdAt":null,"createdBy":null,"disabledAt":null,"disabledBy":null,"enabled":null,"enabledAt":null,"enabledBy":null,"id":null,"name":"appcues_custom:editor/open-shape-picker","state":"ENABLED","targets":[{"event":"click","selector":{"selector":"[data-test-id=\"title-bar-add-shape-btn\"] .labeled-icon-button-inner "}}],"updatedAt":null,"updatedBy":null,"urls":["/app/presentation/*"]},{"accountId":null,"buildUrl":null,"createdAt":null,"createdBy":null,"disabledAt":null,"disabledBy":null,"enabled":null,"enabledAt":null,"enabledBy":null,"id":null,"name":"appcues_custom:editor/open-text-picker","state":"ENABLED","targets":[{"event":"click","selector":{"selector":"[data-test-id=\"title-bar-add-text-btn\"] .labeled-icon-button-inner "}}],"updatedAt":null,"updatedBy":null,"urls":["*"]}],"integrations":{"braze":{"createdAt":null,"createdBy":null,"integrationId":"116403:braze","isEnabled":true,"type":"braze","updatedAt":null,"updatedBy":null},"hubspot-two-way-integration":{"createdAt":null,"createdBy":null,"integrationId":"116403:hubspot-two-way-integration","isEnabled":false,"type":"hubspot-two-way-integration","updatedAt":null,"updatedBy":null}},"styling":{"globalBeaconColor":"#ffbb5c","globalBeaconStyle":"hotspot","globalHotspotAnimation":"hotspot-animation-pulse","globalHotspotStyling":"","globalStyling":"\n\n\n.appcues-actions-right > .appcues-button.appcues-button-success, .appcues-progress-bar-success {\n    background-color: #6760f2;\n}\n.appcues-actions-right > .appcues-button.appcues-button-success:hover {\n    background-color: #8781f5;\n}\n\n\n.appcues-actions-right > .appcues-button.appcues-button-success:hover {\n    background-color: #746bf7 !important;\n}\n\n\n.appcues-actions-right .appcues-button, .appcues-actions-left .appcues-button {\n    font-size: 14px;\n}\n\n\n.appcues-actions-right .appcues-button {\n    color: #ffffff;\n}\n\n\n.appcues-actions-right .appcues-button:hover {\n    color: #ffffff !important;\n}\n\n\n.appcues-actions-left >  .appcues-button {\n    background-color: #2a2c37;\n}\n.appcues-actions-left > .appcues-button:hover {\n    background-color: #393c4b;\n}\n\n\n.appcues-actions-left > .appcues-button:hover {\n    background-color: #434553 !important;\n}\n\n\n.appcues-actions-left .appcues-button {\n    color: #FFFFFF;\n}\n\n\n.appcues-actions-left .appcues-button:hover {\n    color: #FFFFFF !important;\n}\n\n\n.appcues-actions-right .appcues-button, .appcues-actions-left .appcues-button {\n    border-radius: 3px;\n}\n\n\nbody, appcues cue, .tooltip .content {\n    font-family: 'Lato', sans-serif;\n}\n\n\nbody h1, body h2, body h3, body h4, body h5,\nappcues cue h1, appcues cue h2, appcues cue h3, appcues cue h4, appcues cue h5,\n.tooltip .content h1, .tooltip .content h2, .tooltip .content h3, .tooltip .content h4, .tooltip .content h5 {\n    font-family: 'Lato', sans-serif;\n}\n\n\n  body, appcues cue, .tooltip .content {\n      color: #ffffff;\n  }\n  \n\n.tooltip .content .panel {\n  background-color: #2a2c37;\n  border-color: #2a2c37;\n}\n\n.tooltip .content .panel:before, .tooltip .content .panel:after {\n  height: 13px;\n  width: 13px;\n  background-color: #2a2c37;\n  border-radius: 2px;\n  border: none;\n  transform: rotate(45deg);\n}\n\n.tooltip .content .panel:after {\n  position: absolute;\n  content: \"\";\n  z-index: -1;\n}\n\n.tooltip .content.content-top .panel:before, .tooltip .content.content-top .panel:after {\n  margin-left: -7px;\n}\n\n.tooltip .content.content-top .panel:before,\n.tooltip .content.content-top .panel:after,\n.tooltip .content.content-top-left .panel:before,\n.tooltip .content.content-top-left .panel:after,\n.tooltip .content.content-top-right .panel:before,\n.tooltip .content.content-top-right .panel:after {\n  margin-top: -6px;\n}\n\n.tooltip .content.content-bottom .panel:before, .tooltip .content.content-bottom .panel:after {\n  margin-left: -7px;\n}\n\n.tooltip .content.content-bottom .panel:before,\n.tooltip .content.content-bottom .panel:after,\n.tooltip .content.content-bottom-left .panel:before,\n.tooltip .content.content-bottom-left .panel:after,\n.tooltip .content.content-bottom-right .panel:before,\n.tooltip .content.content-bottom-right .panel:after {\n  margin-bottom: -6px;\n}\n\n.tooltip .content.content-right .panel:before, .tooltip .content.content-right .panel:after {\n  margin-top: -7px;\n}\n\n.tooltip .content.content-right .panel:before,\n.tooltip .content.content-right .panel:after,\n.tooltip .content.content-right-top .panel:before,\n.tooltip .content.content-right-top .panel:after,\n.tooltip .content.content-right-bottom .panel:before,\n.tooltip .content.content-right-bottom .panel:after {\n  margin-right: -6px;\n}\n\n.tooltip .content.content-left .panel:before, .tooltip .content.content-left .panel:after {\n  margin-top: -7px;\n}\n\n.tooltip .content.content-left .panel:before,\n.tooltip .content.content-left .panel:after,\n.tooltip .content.content-left-top .panel:before,\n.tooltip .content.content-left-top .panel:after,\n.tooltip .content.content-left-bottom .panel:before,\n.tooltip .content.content-left-bottom .panel:after {\n  margin-left: -6px;\n}\n\n.tooltip .content.content-top-left .panel:before,\n.tooltip .content.content-top-left .panel:after,\n.tooltip .content.content-bottom-left .panel:before,\n.tooltip .content.content-bottom-left .panel:after {\n  right: 10px;\n}\n\n.tooltip .content.content-top-right.panel:before,\n.tooltip .content.content-top-right .panel:after,\n.tooltip .content.content-bottom-right .panel:before,\n.tooltip .content.content-bottom-right .panel:after {\n  left: 10px;\n}\n\n.tooltip .content.content-right-bottom .panel:before,\n.tooltip .content.content-right-bottom .panel:after,\n.tooltip .content.content-left-bottom .panel:before,\n.tooltip .content.content-left-bottom .panel:after {\n  top: 10px;\n}\n\n.tooltip .content.content-right-top.panel:before,\n.tooltip .content.content-right-top .panel:after,\n.tooltip .content.content-left-top .panel:before,\n.tooltip .content.content-left-top .panel:after {\n  bottom: 10px;\n}\n\n.tooltip .content.content-top .panel:after {\n  left: 50%;\n}\n\n.tooltip .content.content-top .panel:after,\n.tooltip .content.content-top-left .panel:after,\n.tooltip .content.content-top-right .panel:after {\n  top: 100%;\n}\n\n.tooltip .content.content-bottom .panel:after {\n  left: 50%;\n}\n\n.tooltip .content.content-bottom .panel:after,\n.tooltip .content.content-bottom-left .panel:after,\n.tooltip .content.content-bottom-right .panel:after {\n  bottom: 100%;\n}\n\n.tooltip .content.content-right .panel:after {\n  top: 50%;\n}\n\n.tooltip .content.content-right .panel:after,\n.tooltip .content.content-right-top .panel:after,\n.tooltip .content.content-right-bottom .panel:after {\n  right: 100%;\n}\n\n.tooltip .content.content-left .panel:after {\n  top: 50%;\n}\n\n.tooltip .content.content-left .panel:after,\n.tooltip .content.content-left-top .panel:after,\n.tooltip .content.content-left-bottom .panel:after {\n  left: 100%;\n}\n\n\n.tooltip .content .panel {\n  color: #ffffff;\n}\n\n.tooltip h1, .tooltip h2, .tooltip h3, .tooltip h4, .tooltip h5 {\ncolor: #ffffff;\n}\n\n  .panel.panel-default {\n    margin-right: 3px;\n    margin-bottom: 2px;\n    border-radius: 6px;\n  }\n  \n\n  .panel.panel-default, .content .panel:after {\n    box-shadow: none;\n  }\n  \n\n      .appcues-backdrop[data-pattern-type=left], .appcues-backdrop[data-pattern-type=shorty], .appcues-backdrop[data-pattern-type=modal] {\n        background-color: #000000;\n      }\n      \n\n      .appcues-backdrop[data-pattern-type=left], .appcues-backdrop[data-pattern-type=shorty], .appcues-backdrop[data-pattern-type=modal] {\n        opacity: 0.35;\n      }\n      \n\nappcues cue {\n    background: #2a2c37\n}\n\n\nappcues cue *, appcues cue {\n    color: #ffffff\n}\n\n.appcues-actions-left > .appcues-button {\n      border: 1px solid #5b5d68 !important;\n  }\n.appcues-actions-left > .appcues-button:hover {\n      border: 1px solid #81838d !important;\n  }\n\n        .appcues-actions-right > .appcues-button,  .appcues-actions-left > .appcues-button {\n            border-radius: 8px;\n        }\n    \n/*\n\tIt's dangerous to go alone! Take this.\n\n\t(Not actually dangerous, but hopefully these selectors \n\twill help you make your flows look beautiful!)\n\n        \t   /|\n\t          / |\n\t         /  |\n\t        /   |\n\t       /    |\n\t      /     |\n\t      \\     |\n\t   /|  \\    |\n\t  / |   \\   |\n\t /  |    \\  |\n\t/___|     \\_| \n\n\tAPPCUES CSS SELECTORS\n*/\n\n/************************************/\n/* Appcues Base Presets */\n\nappcues .appcues-actions-left .appcues-button {\n\tpadding-left: 18px;\n}\nappcues .appcues-actions-left .appcues-button:before {\n\tcontent: none;\n}\n\n/*** Adjust style of progress bar */\n\nappcues .appcues-progress {\n\tbackground-color: white;\n\theight: 7px;\n\tborder: 0;\n}\nappcues .appcues-progress .appcues-progress-bar {\n\ttransition: width 0.5s ease 0.07s;\n}\nappcues .appcues-progress .appcues-progress-bar:not([aria-valuenow='100']) {\n\tborder-top-right-radius: 0;\n\tborder-bottom-right-radius: 0;\n}\n\n/*** Adjust margins & padding */\nappcues cue {\n\tmin-height: 100px !important;\n\tpadding: 22px 54px 82px;\n}\nappcues cue .apc-hero {\n\tmargin: -22px -54px 0;\n}\n/* Fix up Hero typography */\nappcues cue .apc-hero h2 {\n\tfont-size: 18px;\n\tfont-weight: bold;\n}\nappcues[data-pattern-type='modal'] cue {\n\tbox-shadow: 0 0 18px rgba(0, 0, 0, 0.25);\n}\n.tooltip .panel {\n\tpadding: 9px 12px 10px;\n}\n\n/*** Adjust typography */\nappcues cue h1,\n.tooltip h1 {\n\tfont-weight: 200;\n\tfont-size: 32px;\n\tmargin-top: 0.5em;\n\t-webkit-font-smoothing: antialiased;\n}\nappcues cue h2,\n.tooltip h2 {\n\tfont-weight: 400;\n\tfont-size: 24px;\n\tmargin-top: 0.5em;\n\t-webkit-font-smoothing: antialiased;\n}\nappcues cue h3,\n.tooltip h3 {\n\tfont-weight: 600;\n\tletter-spacing: -0.01em;\n\tfont-size: 20px;\n\t-webkit-font-smoothing: antialiased;\n}\nappcues cue h4,\nh5 {\n\tletter-spacing: -0.01em;\n\tmargin-top: 0.75em;\n\t-webkit-font-smoothing: antialiased;\n}\np,\nli {\n\tline-height: 1.6em;\n}\n\n/*** Adjust links in content */\nappcues cue section a[data-step],\nappcues cue section a[href],\n.tooltip p a[data-step],\n.tooltip p a[href] {\n\tcolor: #6760f2;\n}\nappcues cue section a[data-step]:hover,\nappcues cue section a[href]:hover,\n.tooltip p a[data-step]:hover,\n.tooltip p a[href]:hover {\n\tcolor: #6760f2;\n\ttext-decoration: underline; /* a18y */\n}\n\n/*** Adjust skip X */\nappcues .appcues-skip a {\n\tbackground: none;\n\tright: 6px;\n\tfont-size: 28px;\n}\n.tooltip .panel .appcues-skip {\n\tcolor: #ccc;\n}\n\n/* End Appcues Base */\n/************************************/\n\n/* Appcues Dark Colors */\n\nappcues .appcues-progress {\n\tbackground-color: #33333b;\n}\n\n/*** Adjust links in content */\nappcues cue section a[data-step],\nappcues cue section a[href],\n.tooltip p a[data-step],\n.tooltip p a[href] {\n\tcolor: #6760f2;\n}\nappcues cue section a[data-step]:hover,\nappcues cue section a[href]:hover,\n.tooltip p a[data-step]:hover,\n.tooltip p a[href]:hover {\n\tcolor: #6760f2;\n\ttext-decoration: underline; /* a18y */\n}\nappcues cue strong,\nappcues cue b {\n\tcolor: inherit;\n}\n\n/* End Appcues Dark */\n/***********************************/\n\n/*___Buttons and Links___*/\n.appcues-actions-right {\n\t/*[The section of the button row which hold the 'Next' or righthand side button.]*/\n}\n\n.tooltip .content .panel .panel-content-actions .appcues-actions-right {\n\t/*[Full selector to edit .appcues-actions-right in hotspots/tooltips]*/\n}\n\nappcues cue .appcues-actions-right {\n\t/*[Full selector to edit .appcues-actions-right in modals/slideouts]*/\n}\n\n.appcues-actions-left {\n\t/*[The section of the button row which hold the 'Prev' or lefthand side button.]*/\n}\n\n.tooltip .content .panel .panel-content-actions .appcues-actions-left {\n\t/*[Full selector to edit .appcues-actions-left in hotspots/tooltips]*/\n}\n\nappcues cue .appcues-actions-left {\n\t/*[Full selector to edit .appcues-actions-left in modals/slideouts]*/\n}\n\n.appcues-button {\n\t/*[Generic selector for any button.]*/\n}\n\n.appcues-button-success {\n\t/*[Selector for the 'Next' buttons (buttons which advance the step of the flow).]*/\n}\n\n.panel\n\t.panel-content-actions\n\t.appcues-actions-right\n\t> .appcues-button.appcues-button-success {\n\t/*[Full selector to edit .appcues-button-success in hotspots/tooltips]*/\n}\n\nappcues cue .appcues-actions-right > .appcues-button.appcues-button-success {\n\t/*[Full selector to edit .appcues-button-success in modals/slideouts]*/\n}\n\n.panel .panel-content-actions .appcues-skip {\n\t/*[Full selector to edit .appcues-skip in tooltips/hotspots] (Hide these tips)*/\n}\n\nappcues .appcues-skip {\n\t/*[Full selector to edit .appcues-skip in modals/slideouts] (X button to close)*/\n}\n\nappcues[data-pattern-type='shorty'] cue {\n\t/*[Selector for slideouts specifically]*/\n}\n\nappcues[data-pattern-type='modal'] cue {\n\t/*[Selector for modals specifically]*/\n}\n\n/*___Modals and Slideouts___*/\n\nappcues {\n\t/*[This element wraps the entire modal or slideout.]*/\n}\n\nappcues cue {\n\t/*[This is where the main content for modals and slideouts lives.]*/\n}\n\nappcues .appcues-backdrop[data-pattern-type='modal'] {\n\t/*[The backdrop (darkened background) for modals.]*/\n}\n\nappcues .appcues-progress {\n\t/*[The progress bar which indicates how far a user is in the flow]*/\n}\n\nappcues cue .apc-hero {\n\t/*[This is the selector for a hero image.]*/\n}\n\nappcues cue .appcues-actions {\n\t/*[The row where all the buttons are placed.]*/\n}\n\n/*___Hotspots and Tooltips___*/\n\n.tooltip .content .panel {\n\t/*[This is selector for the tooltip panel itself. The styles to the arrow can be accessed using the ::before selector (see below)]*/\n}\n\n.tooltip .content .panel .panel-content {\n\t/*[This is the selector for any content within the tooltip. This applies to both body text and the actions row.]*/\n}\n\n.tooltip .content .panel .panel-content-actions {\n\t/*[The specific container selection for the row with buttons/actions.]*/\n}\n\n/************************************/\n/* Custom Code - Pitch */\n\n/* Typography ------------------------------ */\n\n@font-face {\n\tfont-family: 'Mark Pro';\n\tsrc: local('Mark Pro Heavy'), local('MarkPro-Heavy'),\n\t\turl('https://d33wubrfki0l68.cloudfront.net/7c27f91109360b63ae10570e12ac6353a76e1e60/5b180/fonts/markpro-heavy.woff2')\n\t\t\tformat('woff');\n\tfont-weight: 800;\n\tfont-style: normal;\n}\n\nbody h2,\nbody h1 {\n\tfont-family: 'Mark Pro' !important;\n}\n\nappcues cue .apc-hero h2 {\n\tfont-weight: 800;\n\tfont-size: 24px;\n\tline-height: 32px;\n\t-webkit-font-smoothing: antialiased;\n}\n\nappcues cue h1,\n.tooltip h1 {\n\tfont-weight: 800;\n\tfont-size: 30px;\n\tline-height: 36px;\n\t-webkit-font-smoothing: antialiased;\n\tmargin-top: 12px;\n}\nappcues cue h2,\n.tooltip h2 {\n\tfont-weight: 800;\n\tfont-size: 24px;\n\tline-height: 32px;\n\t-webkit-font-smoothing: antialiased;\n\tmargin-top: 12px;\n}\nappcues cue h3,\n.tooltip h3 {\n\tfont-family: 'Lato', Arial, sans-serif !important;\n\tfont-weight: 700;\n\tfont-size: 18px;\n\tline-height: 24px;\n\t-webkit-font-smoothing: antialiased;\n}\nappcues cue h4,\nh5 {\n\tfont-family: 'Lato', Arial, sans-serif !important;\n\tfont-weight: 700;\n\tfont-size: 15px;\n\tline-height: 21px;\n\t-webkit-font-smoothing: antialiased;\n}\np,\nli {\n\tfont-family: 'Lato', Arial, sans-serif !important;\n\tfont-size: 14px;\n\tline-height: 21px;\n\tfont-weight: 400;\n\t-webkit-font-smoothing: antialiased;\n}\n\n/*** Adjust links in content */\nappcues cue section a[data-step],\nappcues cue section a[href],\n.tooltip p a[data-step],\n.tooltip p a[href] {\n\tcolor: #ffbb5c;\n\tfont-weight: 700;\n\ttext-decoration: underline;\n}\nappcues cue section a[data-step]:hover,\nappcues cue section a[href]:hover,\n.tooltip p a[data-step]:hover,\n.tooltip p a[href]:hover {\n\tdisplay: inline-block;\n\tcolor: #ffbb5c;\n\tbackground-color: rgba(255, 187, 92, 0.25);\n\tfont-weight: 700;\n\ttext-decoration: underline; /* a18y */\n}\n\n/* Typography End ------------------------------ */\n\n/* Buttons Start ------------------------------ */\nappcues cue .appcues-actions-right > .appcues-button.appcues-button-success {\n\t/*[Full selector to edit .appcues-button-success in modals/slideouts]*/\n\tfont-weight: 700;\n\tborder: 1px solid rgba(255, 255, 255, 0.1) !important;\n}\n\nappcues\n\tcue\n\t.appcues-actions-right\n\t> .appcues-button.appcues-button-success:hover {\n\t/*[Full selector to edit .appcues-button-success in modals/slideouts]*/\n\tfont-weight: 700;\n\tborder: 1px solid rgba(255, 255, 255, 0.1) !important;\n}\n\nappcues cue .appcues-actions-right > .appcues-button.appcues-button-success {\n\ttext-decoration: none !important;\n}\n\nappcues .appcues-actions-left .appcues-button {\n\ttext-decoration: none !important;\n}\n\n/* Buttons End ------------------------------ */\n\n/* Modal Content Start ------------------------------ */\n\nappcues cue {\n\tfont-weight: 400;\n\tfont-smooth: always;\n\ttext-rendering: geometricPrecision;\n\t-webkit-font-smoothing: antialiased;\n}\n\n/* Modal Content End ------------------------------ */\n\n/* Bottom Actions Start ------------------------------ */\n\nappcues cue .appcues-actions {\n\t/*[The row where all the buttons are placed.]*/\n\n\tdisplay: block;\n\tpadding-top: 0px;\n\tpadding-bottom: 36px;\n\tpadding-left: 36px;\n\tpadding-right: 36px;\n}\n\n/* Bottom Actions End ------------------------------ */\n\n/* Rating Start ------------------------------ */\n\nappcues cue > section .form-field .rating-option span {\n\tbackground: #3f4250;\n\tborder: 1px solid rgba(255, 255, 255, 0.25);\n}\n\nappcues cue > section .form-field .rating-option span:hover {\n\tbackground: #535665;\n\tborder: 1px solid rgba(255, 255, 255, 0.5);\n}\n\nappcues\n\tcue\n\t> section\n\t.form-field\n\t.rating-option\n\tinput[type='radio']:checked\n\t+ span {\n\tbackground: #8f92a3;\n\tborder: 1px solid rgba(255, 255, 255, 0.5);\n}\n\nappcues\n\tcue\n\t> section\n\t.step-action-form\n\tlabel.field-option\n\tinput[type='radio']\n\t+ span::before,\nappcues\n\tcue\n\t> section\n\t.form-field\n\tlabel.field-option\n\tinput[type='radio']\n\t+ span::before {\n\tbox-shadow: 0 0 0 2px rgba(255, 255, 255, 0.25);\n}\n\nappcues\n\tcue\n\t> section\n\t.form-field\n\tlabel.field-option\n\tinput[type='radio']:checked\n\t+ span::before {\n\tbox-shadow: 0 0 0 2px rgba(255, 255, 255, 0.25);\n\tbackground: #6760f2;\n}\n\n/* Rating End ------------------------------ */\n\n/* Forms Start ------------------------------ */\n\nappcues cue > section .step-action-form input,\nappcues cue > section .step-action-form textarea,\nappcues cue > section .form-field input,\nappcues cue > section .form-field textarea {\n\tfont-family: 'Lato', Arial, sans-serif !important;\n\tbackground: #000000;\n\tborder: 1px solid rgba(255, 255, 255, 0.5);\n\tborder-radius: 8px;\n\tcolor: #ffffff;\n}\n\nappcues cue > section .step-action-form input,\nappcues cue > section .step-action-form textarea,\nappcues cue > section .form-field input,\nappcues cue > section .form-field textarea {\n\tfont-family: 'Lato', Arial, sans-serif !important;\n\tbackground: #000000;\n\tborder: 1px solid rgba(255, 255, 255, 0.5);\n\tborder-radius: 8px;\n\tcolor: #ffffff;\n}\n\nappcues cue > section .step-action-form input,\nappcues cue > section .step-action-form textarea,\nappcues cue > section .form-field input,\nappcues cue > section .form-field textarea {\n\tfont-family: 'Lato', Arial, sans-serif !important;\n}\n\nappcues cue > section .step-action-form label.label-display,\nappcues cue > section .form-field label.label-display {\n\tmargin: 0;\n\tpadding: 0;\n\tmargin-bottom: 4px;\n}\n\n/* Forms End ------------------------------ */\n\n/* Tooltips Start ------------------------------ */\n\n.tooltip .content .panel {\n\tbackground-color: #2a2c37;\n\tborder-radius: 12px;\n}\n\n.tooltip .content .panel::before {\n\tbackground-color: #2a2c37;\n}\n\n/* Tooltips End ------------------------------ */\n\n/* Progress Bar Start ------------------------------ */\n\n.appcues-progress-bar-success {\n\tbackground-color: rgba(255, 255, 255, 1);\n}\n\nappcues .appcues-progress {\n\tbackground-color: #000000;\n\theight: 2px;\n}\n\n/* Progress Bar End ------------------------------ */\n\n/* Backdrop Start ------------------------------ */\n\nappcues .appcues-backdrop[data-pattern-type='modal'] {\n\tbackdrop-filter: blur(20px);\n}\n\n/* Backdrop End ------------------------------ */\n\n/* Shadows Start ------------------------------ */\n\nappcues[data-pattern-type='modal'] cue {\n\tbox-shadow: 0px 4px 40px rgba(0, 0, 0, 0.5);\n}\n\n/* Shadows End ------------------------------ */\n\n/* Sharp Corners Start -------------------------- */\n\nappcues cue,\nappcues .appcues-progress {\n\tborder-radius: 0;\n}\n\n/* Sharp Corners End -------------------------- */\n\n\n    appcues .appcues-actions-right .appcues-button { padding-right: 18px; }\n    appcues .appcues-actions-right .appcues-button:after { content: none; }\n    appcues .appcues-actions-left .appcues-button { padding-left: 18px; }\n    appcues .appcues-actions-left .appcues-button:before { content: none; }","id":"0344a14d-8522-4feb-9493-e3f85ab07147","theme":{"css":"\n:host {\n --typekit-id: ;\n--general-header-font: 'Lato', sans-serif;\n--general-header-font-url: ;\n--general-body-font: 'Lato', sans-serif;\n--general-body-font-url: ;\n--general-body-font-color: #ffffff;\n--button-font-size: 14px;\n--button-border-radius: 8px;\n--button-primary-background-color: #6760f2;\n--button-primary-border-color: transparent;\n--button-primary-border-width: 0px;\n--button-primary-color: #ffffff;\n--button-primary-hover-border-color: transparent;\n--button-primary-hover-border-width: 0px;\n--button-primary-hover-background-color: #746bf7;\n--button-primary-hover-color: #ffffff;\n--button-secondary-background-color: #2a2c37;\n--button-secondary-border-color: #5b5d68;\n--button-secondary-border-width: 1px;\n--button-secondary-color: #FFFFFF;\n--button-secondary-hover-border-color: #81838d;\n--button-secondary-hover-border-width: 1px;\n--button-secondary-hover-background-color: #434553;\n--button-secondary-hover-color: #FFFFFF;\n--patterns-modal-color: #ffffff;\n--patterns-modal-background-color: #2a2c37;\n--patterns-modal-backdrop-color: #000000;\n--patterns-modal-backdrop-opacity: 0.35;\n--patterns-tooltip-color: #ffffff;\n--patterns-tooltip-background-color: #2a2c37;\n--patterns-tooltip-border-radius: 6px;\n--patterns-tooltip-shadow-distance-x: 0;\n--patterns-tooltip-shadow-distance-y: 0;\n--patterns-tooltip-shadow-blur: 0;\n--patterns-tooltip-shadow-color: transparent;\n--patterns-tooltip-beacon-color: #ffbb5c;\n}","json":{"button":{"borderRadius":"8px","fontSize":"14px","primary":{"backgroundColor":"#6760f2","borderColor":"transparent","borderWidth":"0px","color":"#ffffff","hover":{"backgroundColor":"#746bf7","borderColor":"transparent","borderWidth":"0px","color":"#ffffff"}},"secondary":{"backgroundColor":"#2a2c37","borderColor":"#5b5d68","borderWidth":"1px","color":"#FFFFFF","hover":{"backgroundColor":"#434553","borderColor":"#81838d","borderWidth":"1px","color":"#FFFFFF"}}},"general":{"bodyFont":"'Lato', sans-serif","bodyFontColor":"#ffffff","bodyFontUrl":"","headerFont":"'Lato', sans-serif","headerFontUrl":""},"patterns":{"modal":{"backdropColor":"#000000","backdropOpacity":0.35,"backgroundColor":"#2a2c37","color":"#ffffff"},"tooltip":{"backgroundColor":"#2a2c37","beacon":{"color":"#ffbb5c"},"borderRadius":"6px","color":"#ffffff","shadow":{"blur":"0","color":"transparent","distance":{"x":"0","y":"0"}}}},"typekitId":""}},"typekitId":""}};
    var VERSION = ACCOUNT_DETAILS.VERSION;
    var RELEASE_ID = ACCOUNT_DETAILS.RELEASE_ID;
    var GENERIC_BUNDLE_DOMAIN = ACCOUNT_DETAILS.GENERIC_BUNDLE_DOMAIN;
    var accountId = ACCOUNT_DETAILS.accountId;
    var isBootstrapped = false;

    self.AppcuesBundleSettings = {
      accountId: accountId,
      VERSION: VERSION,
      RELEASE_ID: RELEASE_ID,
      GENERIC_BUNDLE_DOMAIN: GENERIC_BUNDLE_DOMAIN,
      GENERIC_BUNDLE_PATH: ACCOUNT_DETAILS.GENERIC_BUNDLE_PATH,
      styling:  ACCOUNT_DETAILS.styling,
      integrations: ACCOUNT_DETAILS.integrations,
      account: ACCOUNT_DETAILS.account,
      events: ACCOUNT_DETAILS.custom_events
    };

    var skipAMD = false;
    var windowGlobals = window["AppcuesSettings"];
    if (
      windowGlobals &&
      typeof windowGlobals === "object" &&
      windowGlobals.skipAMD === true
    ) {
      skipAMD = true;
    }

    var doc = self.document;
    self[ns] = self[ns] || [];
    var Appcues = self[ns];
    if (Appcues.invoked) {
        if (self.console && console.error) {
            console.error('Appcues snippet included twice.');
        }
        return;
    }

    if (Appcues.identify) return;
    Appcues.invoked = true;

    var methods = [
        "identify",
        "track",
        "page",
        "anonymous",
        "start",
        "show",
        "loadLaunchpad",
        "clearShow",
        "on",
        "off",
        "once",
        "reset",
        "debug",
        "user",
        "call",
        "settings",
        "content",
        "initMixpanel",
        "initHeap",
        "initIntercom",
        "initCIO",
        "initWoopra",
        "initAmplitude",
        "initKlaviyo",
        "initTD",
        "initLl",
        "initCalq",
        "initKM",
        "initGA",
        "initGTM",
        "initSegment",
        "initRudderstack",
        "initBraze",
        "initFullStory",
        "initHotjar",
        "initLogRocket",
        "group",

        // Methods solely for the injectable
        "injectContent",
        "injectStyles",
    ];

    var promises = [
        "user"
    ];

    function factory(method){
        return function(){
            var args = Array.prototype.slice.call(arguments);
            if (isBootstrapped) {
              self.Appcues[method].apply(self.Appcues, args);
            } else {
              args.unshift(method);
              Appcues.push(args);
            }
            return self.Appcues;
        };
    }

    // For each of our methods, generate a queueing stub.
    for (var i = 0; i < methods.length; i++) {
        var key = methods[i];
        Appcues[key] = factory(key);
    }

    for (var i = 0; i < promises.length; i++) {
        var key = promises[i];
        Appcues[key] = function() {
          var args = Array.prototype.slice.call(arguments);
          if (isBootstrapped) {
            return self.Appcues[key].apply(self.Appcues, args);
          } else {
            return new Promise(function(resolve, _reject) {
              args.unshift(resolve);
              args.unshift(key);
              Appcues.push(args);
            });
          }
        };
    }

    if (
      !skipAMD &&
      typeof window.define === "function" &&
      window.define.amd &&
      (window.define.amd.vendor == null ||
        window.define.amd.vendor !== "dojotoolkit.org")
    ) {
      window.define(function() { return Appcues; });
    }

    function load(){
        var bundleScript = doc.createElement("script");

        bundleScript.crossOrigin = "anonymous";
        bundleScript.integrity = "sha256-7s0tBCb39a2vsdnjabp5JHvujYL/7tF4luqq/T1MSIM=";

        bundleScript.type = "text/javascript";
        bundleScript.src = GENERIC_BUNDLE_URL;
        bundleScript.async = true;
        bundleScript.onload = function () {
            isBootstrapped = true;
            Appcues.forEach(function(call) {
                var fnName = call[0];
                var args = call.slice(1);
                if (promises.indexOf(fnName) === -1) {
                  self[ns] && self[ns][fnName] &&
                      self[ns][fnName].apply(self[ns], args);
                } else {
                  var resolve = args[0];
                  var promiseArgs = args.slice(1);
                  self[ns] && self[ns][fnName] &&
                    self[ns][fnName].apply(self[ns], promiseArgs).then(
                      function() { resolve(arguments[0]); }
                    );
                }
            });
        };

        var firstScript = doc.getElementsByTagName('script')[0];
        firstScript.parentNode.insertBefore(bundleScript, firstScript);
    }
    Appcues.SNIPPET_VERSION = VERSION;
    load();
})(window, 'Appcues');
