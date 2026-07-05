const questionBank = [
    {
        question: "In manual mode, who or what drives the outflow valve full open during landing?",
        options: [
            "The pilot using the MAN V/S CTL switch",
            "The active Cabin Pressure Controller",
            "The pilot using the DITCHING pb"
        ],
        answer: "The active Cabin Pressure Controller"
    },
    {
        question: "The forward cargo ventilation system includes two isolation valves that:",
        options: [
            "cannot be controlled from the cockpit",
            "allow only cabin air to ventilate the cargo compartment if closed",
            "close automatically if smoke is detected"
        ],
        answer: "close automatically if smoke is detected"
    },
    {
        question: "Following a pressurization SYSTEM 1 fault:",
        options: [
            "Master caution is activated and ECAM actions must be taken by the crew",
            "System 2 must be selected by the crew",
            "System 2 takes over automatically without crew action"
        ],
        answer: "System 2 takes over automatically without crew action"
    },
    {
        question: "The safety valves are operated:",
        options: [
            "Electrically",
            "Hydraulically",
            "Pneumatically"
        ],
        answer: "Pneumatically"
    },
    {
        question: "The RAM air switch should be used:",
        options: [
            "At any time",
            "Only when diff press is less than 1 psi",
            "When diff press is greater than 1 psi",
            "Only after outflow valve is fully opened"
        ],
        answer: "Only when diff press is less than 1 psi"
    },
    {
        question: "When the landing elevation is set to AUTO, the landing elevation is sent to the controller from:",
        options: [
            "FMGC",
            "FCU",
            "ADIRS"
        ],
        answer: "FMGC"
    },
    {
        question: "The pack flow control valve closes automatically in case of:",
        options: [
            "Pack overheat, engine fire push button released, engine start, ditching p/b pressed",
            "Bleed valve failure, pack outlet pressure increase",
            "A and b."
        ],
        answer: "A and b."
    },
    {
        question: "In automatic control mode, cabin pressurization is optimized using information from:",
        options: [
            "FMGS cruise level, time to climb and static pressure information",
            "Actual cruise level",
            "Selected cabin altitude rotary switch and FMGS landing elevation"
        ],
        answer: "FMGS cruise level, time to climb and static pressure information"
    },
    {
        question: "On ECAM PRESS page, the outflow valve indicator changes amber if:",
        options: [
            "Fully closed",
            "Fully open in flight",
            "Fully open in ground"
        ],
        answer: "Fully open in flight"
    },
    {
        question: "In normal operation, pressurization is:",
        options: [
            "Fully automatic",
            "Manually controlled",
            "Both answers are corrects"
        ],
        answer: "Fully automatic"
    },
    {
        question: "During ground operation, the outflow valve is:",
        options: [
            "Fully open",
            "Fully closed",
            "Positioned according to FMGS demands"
        ],
        answer: "Fully open"
    },
    {
        question: "The LOC P/B on the FCU is pressed to arm the LOC mod. This mode is used for:",
        options: [
            "Performing a published localizer approach",
            "Tracking a VOR beam during an approach",
            "X"
        ],
        answer: "Performing a published localizer approach"
    },
    {
        question: "In cruise, lateral A/P orders are executed by:",
        options: [
            "Ailerons and spoilers",
            "Ailerons and rudder",
            "Rudder and spoilers",
            "Ailerons, rudder, spoilers"
        ],
        answer: "Ailerons, rudder, spoilers"
    },
    {
        question: "What does a triple click mean during an ILS approach?",
        options: [
            "A level 3 warning to the crew",
            "Landing capability downgrading warning",
            "Flaps are set at 3 and the l/g is not down"
        ],
        answer: "Landing capability downgrading warning"
    },
    {
        question: "What are the basic modes of AP/FD:",
        options: [
            "V/S and HDG",
            "ALT and NAV",
            "SPD and HDG"
        ],
        answer: "V/S and HDG"
    },
    {
        question: "The active FPLN is erased when:",
        options: [
            "The pilot calls the a/c status page",
            "The wheels touch the runway at landing",
            "The a/c has been on ground for 30 sec following the landing",
            "One engine is shut down at parking place"
        ],
        answer: "The a/c has been on ground for 30 sec following the landing"
    },
    {
        question: "The FAC computes rudder travel limit:",
        options: [
            "Only when AP is engaged",
            "Only at low speed",
            "At any time"
        ],
        answer: "At any time"
    },
    {
        question: "After a dual engine generator's failure, EMER ELEC config triggered and emergency gen supplies the ACFT:",
        options: [
            "FMGC 1 only is available (nav function only)",
            "FMGC 2 only is available",
            "Both FMGCS are available",
            "No FMGC is available"
        ],
        answer: "FMGC 1 only is available (nav function only)"
    },
    {
        question: "The flight guidance function are:",
        options: [
            "Autopilot, flight plan, A/THR",
            "Autopilot, performance , flight plan",
            "Autopilot, flight director, A/THR",
            "Flight management, autopilot, A/THR"
        ],
        answer: "Autopilot, flight director, A/THR"
    },
    {
        question: "Thrust levers are in climb detent. A/THR disengages:",
        options: [
            "The engine thrust equals CLB thrust limit",
            "Is frozen at the current thrust",
            "Corresponds to the thrust levers position",
            "Progressively becomes equal to the thrust levers position"
        ],
        answer: "Corresponds to the thrust levers position"
    },
    {
        question: "When the A/P is engaged, the rudder is normally controlled by:",
        options: [
            "The FMGC",
            "The FAC",
            "The ELAC",
            "The SEC"
        ],
        answer: "The FAC"
    },
    {
        question: "What does the 'TOO STEEP PATH AHEAD' amber message on MCDU means?",
        options: [
            "The A/C is approaching a descent segment between two constraints waypoints that are impossible to fly with the planned descent speed and half speed brake extended.",
            "The descent may become too steep and the speed may reach MMO or VMO.",
            "Moving the sidestick or extending the flaps.",
            "Moving the thrust levers or using the speed brakes."
        ],
        answer: "The A/C is approaching a descent segment between two constraints waypoints that are impossible to fly with the planned descent speed and half speed brake extended."
    },
    {
        question: "To display localizer and glide slope indications on the PFD, you need:",
        options: [
            "Press the APPR p/b on the FCU.",
            "Press the LS p/b on the EFIS control panel.",
            "Press the LOC pushbutton on the FCU."
        ],
        answer: "Press the LS p/b on the EFIS control panel."
    },
    {
        question: "To switch from speed to Mach on FCU, you need to:",
        options: [
            "Push the speed knob.",
            "Push the Speed/Mach p/b.",
            "Push the HDG-V/S / TRK-FPA p/b."
        ],
        answer: "Push the Speed/Mach p/b."
    },
    {
        question: "If the BLUE electric pump malfunctions and the BLUE ELEC PUMP pb is selected OFF:",
        options: [
            "The PTU pressurizes the BLUE system",
            "The RAT deploys automatically and powers the BLUE system",
            "The Blue system shuts down (unpressurized)"
        ],
        answer: "The Blue system shuts down (unpressurized)"
    },
    {
        question: "During a manual start, how is the start valve opened?",
        options: [
            "It is automatic once the ENG MASTER is placed to the ON position.",
            "By depressing the ENG MAN START pushbutton on the overhead panel.",
            "By depressing the ENG MAN START pushbutton on the overhead panel while the ENG MODE selector is out of the NORM position."
        ],
        answer: "By depressing the ENG MAN START pushbutton on the overhead panel."
    },
    {
        question: "In NORMAL LAW, the SIDESTICK commands a LOAD FACTOR deman. In what situation does the SIDESTICK command an ANGLE OF ATTACK demand?",
        options: [
            "At bank angle > 33°.",
            "After the Stall Warning has activated.",
            "When the ANGLE OF ATTACK protection activates."
        ],
        answer: "When the ANGLE OF ATTACK protection activates."
    },
    {
        question: "During an automatic start of engine 1, the crew notices only igniter B is powered. Is this normal?",
        options: [
            "No. Contact maintenance and advise igniter A is inoperative",
            "Yes. FADEC alternates igniters for automatic engine starts",
            "Yes. FADEC only uses igniter B to start engine 1"
        ],
        answer: "Yes. FADEC alternates igniters for automatic engine starts"
    },
    {
        question: "The trim function of the FAC is:",
        options: [
            "A pitch trim",
            "A rudder trim",
            "An aileron trim",
            "A pitch trim and a rudder trim"
        ],
        answer: "A rudder trim"
    },
    {
        question: "What do you command in the pitch channel when you deflect the SIDESTICK in normal flight?",
        options: [
            "Attitude.",
            "Load Factor."
        ],
        answer: "Load Factor."
    },
    {
        question: "If selected ON, which exterior lights automatically extinguish with the landing gear retracted?",
        options: [
            "Nose lights (taxi and takeoff)",
            "Landing lights",
            "Wing lights"
        ],
        answer: "Nose lights (taxi and takeoff)"
    },
    {
        question: "The mixing unit is connected to:",
        options: [
            "Packs, cabin air, emergency ram air inlet and LP ground Connector",
            "Packs, emergency ram air inlet and LP ground connector",
            "Packs and cabin air"
        ],
        answer: "Packs, cabin air, emergency ram air inlet and LP ground Connector"
    },
    {
        question: "The Alpha Lock feature of the Slat and Flap Control Computers (SFCCs) prevents:",
        options: [
            "The extension of flaps at a speed greater than the maximum flap extension speed",
            "The retraction of the flaps during a high angle of attack/ low speed situation",
            "The retraction of the slats during a high angle of attack/low speed situation"
        ],
        answer: "The retraction of the slats during a high angle of attack/low speed situation"
    },
    {
        question: "A fast alignment occurs by selecting the rotary MODE selector from NAV to OFF and back to NAV within how many seconds?",
        options: [
            "5 seconds",
            "10 seconds",
            "15 seconds"
        ],
        answer: "5 seconds"
    }
];