const questionBank = [
    {
        question: "In manual mode, who or what drives the outflow valve full open during landing?",
        options: [
            "The pilot using the MAN V/S CTL switch",
            "The active Cabin Pressure Controller",
            "The pilot using the DITCHING pb"
        ],
        answer: "The pilot using the MAN V/S CTL switch"
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
        answer: "By depressing the ENG MAN START pushbutton on the overhead panel while the ENG MODE selector is out of the NORM position."
    },
    {
        question: "In NORMAL LAW, the SIDESTICK commands a LOAD FACTOR demand. In what situation does the SIDESTICK command an ANGLE OF ATTACK demand?",
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
        question: "The active F-PLN is erased when",
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
            "Autopilot, performance, flight plan",
            "Autopilot, flight director, A/THR",
            "Flight management, autopilot, A/THR"
        ],
        answer: "Autopilot, flight director, A/THR"
    },
    {
        question: "Thrust levers are in climb detent, A/THR disengages:",
        options: [
            "The engine thrust equals CLB thrust limit",
            "Is frozen at the current thrust",
            "Corresponds to the thrust levers position",
            "Progressively becomes equal to the thrust levers position"
        ],
        answer: "Is frozen at the current thrust"
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
        question: "What does the \"TOO STEEP PATH AHEAD\" amber message on MCDU means?",
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
        question: "To switch from speed to Mach on FCU, you need to :",
        options: [
            "Push the speed knob.",
            "Push the Speed/Mach p/b.",
            "Push the HDG-V/S / TRK-FPA p/b."
        ],
        answer: "Push the Speed/Mach p/b."
    },
    {
        question: "Select the true statement regarding the FMA :",
        options: [
            "Green display an active mode and white display an engaged system.",
            "Cyan display an active mode armed.",
            "White display an armed mode."
        ],
        answer: "Green display an active mode and white display an engaged system."
    },
    {
        question: "The AP function:",
        options: [
            "Is lost in case of both FM failure.",
            "Remains available in case of both FM failure.",
            "Remains available in case of both FG failure."
        ],
        answer: "Is lost in case of both FM failure."
    },
    {
        question: "During takeoff, to leave SRS MODE:",
        options: [
            "You have to reach the acceleration altitude inserted in MCDU.",
            "You have to select speed on FCU.",
            "Both answers are correct."
        ],
        answer: "Both answers are correct."
    },
        {
        question: "LVR ASYM on FMA means:",
        options: [
            "Thrust is asymetric.",
            "Only one thrust lever is set to FLEX/MCT or CL detent.",
            "Abnormal lateral acceleration is detected by ADIRS."
        ],
        answer: "Only one thrust lever is set to FLEX/MCT or CL detent."
    },
    {
        question: "When pushing the APPR p/b on FCU:",
        options: [
            "LOC and GS modes are armed when performing ILS.",
            "Approach phase is activated.",
            "Speed automatically reduces to approach speed ."
        ],
        answer: "LOC and GS modes are armed when performing ILS."
    },
    {
        question: "During descent in OPEN DES mode, pilot selects an altitude higher than aircraft altitude:",
        options: [
            "Vertical mode switches to VIS (present V/S of aircraft).",
            "Vertical mode switches to OP CLB.",
            "Vertical mode remains OPEN DES."
        ],
        answer: "Vertical mode switches to VIS (present V/S of aircraft)."
    },
    {
        question: "In clean configuration, if approach phase is activated and confirmed on PERF page:",
        options: [
            "Speed reduces to 250 kt.",
            "ILS capture mode is engaged.",
            "Managed speed reduces to Green Dot."
        ],
        answer: "Managed speed reduces to Green Dot."
    },
    {
        question: "What component unrelated to the CVR must be selected ON for a successful CVR test?",
        options: [
            "RMP # 1",
            "Cockpit speaker",
            "Parking brake"
        ],
        answer: "Parking brake"
    },
    {
        question: "Which position of the INT/RAD switch must be used with care since it creates a \"hot mike\" for interphone communications?",
        options: [
            "INT",
            "Neutral",
            "RAD"
        ],
        answer: "INT"
    },
    {
        question: "In the event of a failed ACP, how can the pilot continue to make ACP selections?",
        options: [
            "No pilot action is required. The failed ACP is automatically replaced with ACP 3",
            "The failed ACP must be reset by selecting the ACP OFF then ON",
            "The failed ACP can be replaced by ACP 3 using the AUDIO SWITCHING selector"
        ],
        answer: "The failed ACP can be replaced by ACP 3 using the AUDIO SWITCHING selector"
    },
    {
        question: "If RMP 2 fails:",
        options: [
            "The whole system is inoperative",
            "VHF2 and HF2 frequencies cannot be controlled",
            "All com systems can be controlled by any other RMP",
            "Only VHF2 frequencies cannot be controlled"
        ],
        answer: "All com systems can be controlled by any other RMP"
    },
    {
        question: "Can you transmit on VHF and the PA at the same time:",
        options: [
            "Never",
            "Yes by pressing RAD toggle switch and PA key",
            "Yes by using stick PTT command and PA key"
        ],
        answer: "Never"
    },
    {
        question: "From lowest to highest, what is the priority order for normal electrical power?",
        options: [
            "GEN(engine), APU GEN, EXT PWR",
            "EXT PWR, APU GEN, GEN (engine)",
            "GEN (engine), EXT PWR, APU GEN"
        ],
        answer: "GEN (engine), EXT PWR, APU GEN"
    },
    {
        question: "In the normal configuration, what bus powers the AC ESS BUS?",
        options: [
            "AC BUS 2",
            "AC ESS SHED BUS",
            "AC BUS 1"
        ],
        answer: "AC BUS 1"
    },
    {
        question: "During the Preliminary Cockpit Preparation, the BAT pbs are selected to OFF to conduct a voltage check. What is the minimum voltage for a successful battery check?",
        options: [
            "Greater than or equal to 25.5 volts",
            "Greater than 26.5 volts",
            "Greater than 25.5 volts"
        ],
        answer: "Greater than 25.5 volts"
    },
    {
        question: "What cockpit lighting is available during the emergency electrical configuration?",
        options: [
            "F/O's dome light, captain's main panel flood lights, and the standby compass light",
            "F/O's dome light and the standby compass light",
            "Dome lights only"
        ],
        answer: "F/O's dome light, captain's main panel flood lights, and the standby compass light"
    },
    {
        question: "Each aircraft generator (engine and APU) can supply up to 90 KVA while the emergency generator supplies how much power?",
        options: [
            "45 KVA",
            "15 KVA",
            "5 KVA"
        ],
        answer: "5 KVA"
    },
    {
        question: "AC ESS BUS is normally supplied by:",
        options: [
            "AC BUS 1",
            "AC BUS 2",
            "EMERGENCY GENERATOR",
            "STATIC INVERTER"
        ],
        answer: "AC BUS 1"
    },
    {
        question: "The external power has priority over the APU gen:",
        options: [
            "Yes",
            "No"
        ],
        answer: "Yes"
    },
    {
        question: "The static inverter transforms the DC current from battery 1 into:",
        options: [
            "Single phase 115V - 400 HZ ac current",
            "Three phases 115/200V - 400 HZ ac current"
        ],
        answer: "Single phase 115V - 400 HZ ac current"
    },
    {
        question: "In case of TR1 and TR2 failure:",
        options: [
            "DC BUS 1, DC BUS 2, DC BAT BUS are lost",
            "AC ESS BUS, AC ESS SHED BUS are lost",
            "DC ESS BUS is lost"
        ],
        answer: "DC BUS 1, DC BUS 2, DC BAT BUS are lost"
    },
    {
        question: "On the EMER ELEC PWR panel, a fault light illuminates in red under the label. What does it mean?",
        options: [
            "RAT is not extended",
            "Emergency generator is supplying but AC ESS bus is not powered",
            "Emergency generator is not supplying power when AC BUS 1 and 2 are not powered"
        ],
        answer: "Emergency generator is not supplying power when AC BUS 1 and 2 are not powered"
    },
    {
        question: "In cold aircraft configuration (no ac and no dc supply), where can the batteries voltage can be checked?",
        options: [
            "On the ECAM ELEC page",
            "On the ELEC overhead panel",
            "There is no indication"
        ],
        answer: "On the ELEC overhead panel"
    },
    {
        question: "DC BAT BUS can be supplied by:",
        options: [
            "DC BUS 1 or BATTERIES",
            "DC BUS 1, DC BUS 2 or BATTERIES",
            "DC BUS 2 or BATTERIES"
        ],
        answer: "DC BUS 1, DC BUS 2 or BATTERIES"
    },
    {
        question: "In case of EMER ELEC config, why is the ECAM asking you to press the BUS TIE p/b to \"Off\"",
        options: [
            "To separate both sides of the electrical system.",
            "To connect both generators directly to the AC ESS BUS",
            "To connect both sides of the electrical system.",
            "To switch both generators to the opposite side AC BUS."
        ],
        answer: "To separate both sides of the electrical system."
    },
    {
        question: "If an ENG FIRE pb is pushed:",
        options: [
            "AGENT 1 and AGENT 2 are armed",
            "AGENT 1 only is armed",
            "AGENT 1 discharges automatically and AGENT 2 is armed"
        ],
        answer: "AGENT 1 and AGENT 2 are armed"
    },
    {
        question: "During the exterior preflight, \
            the pilot observes the illumination of the APU FIRE light on the external \
            power panel (near the nosewheel) and hears the external warning horn followed by the APU \
            emergency shutdown. Outside the cockpit, the pilot must do what to discharge the APU fire bottle?",
        options: [
            "Push the FIRE light on the external power panel (near the nosewheel)",
            "Push the APU SHUT OFF pb on the external power panel (near the nosewheel)",
            "Nothing. On the ground only, the APU shuts down and automatically discharges the APU fire bottle"
        ],
        answer: "Nothing. On the ground only, the APU shuts down and automatically discharges the APU fire bottle"
    },
    {
        question: "With reference to the cargo compartment fire extinguishing, which statement is true?",
        options: [
            "There is one fire bottle that discharges into both cargo compartments",
            "There is one fire bottle for each cargo compartment",
            "There is one fire bottle that can be discharged into one compartment only and both DISC lights illuminate when either FWD or AFT pb is pushed"
        ],
        answer: "There is one fire bottle that can be discharged into one compartment only and both DISC lights illuminate when either FWD or AFT pb is pushed"
    },
    {
        question: "When engine fire p/b is released out, which valve is affected?",
        options: [
            "LP FUEL SHUT OFF VALVE + HYD + BLEED + PACK + ELEC GEN",
            "HYDRAULIC FIRE SHUT OFF VALVE",
            "FUEL VALVE"
        ],
        answer: "LP FUEL SHUT OFF VALVE + HYD + BLEED + PACK + ELEC GEN"
    },
    {
        question: "What does the engine fire test p/b verifies?",
        options: [
            "The detection system loop circuit integrity",
            "The squib circuits and the bottle pressure of extinguishing system",
            "Both A and B are correct"
        ],
        answer: "Both A and B are correct"
    },
    {
        question: "When the APU fire p/b is released out, the:",
        options: [
            "APU generator is deactivated",
            "APU generator is disconnected",
            "APU generator is energized"
        ],
        answer: "APU generator is deactivated"
    },
    {
        question: "How is an APU fire on ground normally extinguished?",
        options: [
            "From APU fire panel",
            "Automatically",
            "From external power panel"
        ],
        answer: "Automatically"
    },
    {
        question: "In normal law, if one sidestick is rapidly pulled back, can the aircraft exceed the maximum \"G Load\"?",
        options: [
            "No. The load factor limitation overrides sidestick commands to avoid excessive \"G loads\"",
            "No. The sidestick commands are deactivated for five seconds above 2.0Gs",
            "Yes. The pilot should avoid rapid sidestick commands"
        ],
        answer: "No. The load factor limitation overrides sidestick commands to avoid excessive \"G loads\""
    },
    {
        question: "In alternate law:",
        options: [
            "Pitch trim is automatic",
            "Turn coordination is automatic",
            "Roll is the same as normal law (roll rate)"
        ],
        answer: "Pitch trim is automatic"
    },
    {
        question: "In NORMAL LAW, the STALL WARNING is activated:",
        options: [
            "AOA corresponding to STALL WARNING cannot be reached in NORMAL LAW.",
            "When a MAX is reached.",
            "When a PROT is reached."
        ],
        answer: "AOA corresponding to STALL WARNING cannot be reached in NORMAL LAW."
    },
    {
        question: "The PITCH NORMAL LAW provides",
        options: [
            "Load factor + high angle of attack + high speed + pitch attitude protections.",
            "Load factor protection + pitch att. protection + low speed stability.",
            "Load factor + pitch attitude + high speed protections."
        ],
        answer: "Load factor + high angle of attack + high speed + pitch attitude protections."
    },
    {
        question: "Which of the following functions is carried out by the FLIGHT CONTROL COMPUTERS?",
        options: [
            "Maintaining a safe flight envelope.",
            "Simulation of artificial feel for the SIDE Sticks.",
            "Conversion of Rudder Pedal inputs into Electrical Control Signals for the Rudder."
        ],
        answer: "Maintaining a safe flight envelope."
    },
    {
        question: "What are the different laws in which the FLIGHT CONTROL COMPUTERS can operate?",
        options: [
            "Normal law, alternate law, back up law.",
            "Normal law, alternate law, direct law.",
            "Automatic law, ground law, flight law."
        ],
        answer: "Normal law, alternate law, direct law."
    },
    {
        question: "What do you command in the pitch channel when you deflect the SIDESTICK in normal flight?",
        options: [
            "Attitude.",
            "Load Factor.",
            "Pitch Rate."
        ],
        answer: "Load Factor."
    },
    {
        question: "After climbing with climb power set (no A/THR) you LEVEL OFF but do not reduce power far enough. What happens?",
        options: [
            "On reaching the selected cruising speed, auto thrust engages and takes over speed control.",
            "The Over speed Warning activates. You must take corrective action.",
            "High Speed Protection activates at VMO +4 kt. Pitch increases automatically and VMO is maintained."
        ],
        answer: "High Speed Protection activates at VMO +4 kt. Pitch increases automatically and VMO is maintained."
    },
    {
        question: "You are in flight and move the Flaps lever from 0 to 1. Which Slats/Flaps configuration do you achieve?",
        options: [
            "1 (slats)",
            "1 + F.",
            "0. (slats)"
        ],
        answer: "1 (slats)"
    },
    {
        question: "You have forgotten to set the SPEED BRAKE lever to the armed position for landin The Ground Spoilers deploy automatically after landing...",
        options: [
            "...when ground condition is sensed and all thrust levers are in idle",
            "...only when at least one thrust lever is in reverse and the others are in idle.",
            "....They do not deploy automatically."
        ],
        answer: "...only when at least one thrust lever is in reverse and the others are in idle."
    },
    {
        question: "What happens when both pilots move their SIDESTICK in the same direction?",
        options: [
            "Both inputs are added, up to a maximum deflection.",
            "Both inputs are added, without limitation.",
            "Nothing."
        ],
        answer: "Both inputs are added, up to a maximum deflection."
    },
    {
        question: "Can you override the HIGH SPEED PROTECTION by applying full forward SIDESTICK?(Normal law)",
        options: [
            "Yes, pilot input always has priority.",
            "No",
            "Yes, if both SIDESTICKs are moved full forward."
        ],
        answer: "No"
    },
    {
        question: "You are in manual flight. After descent, you LEVEL OFF, but leave the power in IDLWhat happens next?",
        options: [
            "The aircraft maintains altitude until reaching V PROT, then goes automatically into descent.",
            "The aircraft maintains altitude (and trims) until it stalls.",
            "The aircraft maintains altitude (and trims) until the stick shaker activates."
        ],
        answer: "The aircraft maintains altitude until reaching V PROT, then goes automatically into descent."
    },
    {
        question: "All flight controls are:",
        options: [
            "Electrically controlled and hydraulically actuated.",
            "Electrically controlled with mechanical back up control and hydraulically actuated.",
            "Electrically controlled and hydraulically actuated with mechanical reversion capability."
        ],
        answer: "Electrically controlled and hydraulically actuated."
    },
    {
        question: "Pushing the  \"RESET\" p/b on the rudder trim control panel:",
        options: [
            "Resets the rudder trim to zero degree.",
            "Resets the rudder trim to the value displayed on the position indicator.",
            "Resets the rudder trim to the last position prior to AP activation."
        ],
        answer: "Resets the rudder trim to zero degree."
    },
    {
        question: "In flight, with FLAP 2 configuration, in order to select FLAPS 3:",
        options: [
            "You must decrease speed below \"S\" speed.",
            "You must decrease speed below \"= \" symbol.",
            "You must decrease speed below \"F\" speed."
        ],
        answer: "You must decrease speed below \"= \" symbol."
    },
    {
        question: "During refueling, the AUTO FEED FAULT message is displayed on the E/WD because a significant amount of fuel is in the center tank and the wing tanks are not full. What action is required by the crew?",
        options: [
            "No maintenance action is required since refueling is in process",
            "Call maintenance to fix or defer the malfunction",
            "Reset the system with the MODE SEL pb on the overhead FUEL panel"
        ],
        answer: "No maintenance action is required since refueling is in process"
    },
    {
        question: "When do the fuel used (F USED) indications on the FUEL page automatically reset to zero?",
        options: [
            "After landing",
            "Engine shutdown",
            "Engine start"
        ],
        answer: "Engine start"
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
        question: "Which of the following criteria is true for inhibiting the PTU between engine starts?",
        options: [
            "On the ground with staggered ENG MASTER switches and nosewheel steering connectec",
            "On the ground with staggered ENG MASTER switches), parking brake off and nosewheel steering connected",
            "On the ground with staggered ENG MASTER switches, parking brake on or nosewheel steering disconnected"
        ],
        answer: "On the ground with staggered ENG MASTER switches, parking brake on or nosewheel steering disconnected"
    },
    {
        question: "Which hydraulic system provides pressure for braking under normal conditions?",
        options: [
            "YELLOW",
            "BLUE",
            "GREEN"
        ],
        answer: "GREEN"
    },
    {
        question: "Engine anti-ice is applied to what component of the engine?",
        options: [
            "The nacelle leading edges",
            "The spinner and nacelle leading edges",
            "The fan and nacelle leading edges"
        ],
        answer: "The nacelle leading edges"
    },
    {
        question: "What is the airspeed limit for operation of the windscreen wipers?",
        options: [
            "230 knots",
            "250 knots",
            "200 knots"
        ],
        answer: "230 knots"
    },
    {
        question: "If electrical power supply to the wing anti-ice valve fails, the wing anti-ice valve:",
        options: [
            "Closes",
            "Opens",
            "Remains in its current position"
        ],
        answer: "Closes"
    },
    {
        question: "The wing anti-ice system provides:",
        options: [
            "Anti-icing capability for only the outboard leading edge devices of each wing",
            "Anti-icing capability for all leading edge devices of each wing",
            "Anti-icing capability for all leading edge and trailing edge"
        ],
        answer: "Anti-icing capability for only the outboard leading edge devices of each wing"
    },
    {
        question: "Which hydraulic system does the Landing Gear Control and Interface Unit (LGIU) use to extend and retract the landing gear?",
        options: [
            "GREEN",
            "YELLOW",
            "BLUE"
        ],
        answer: "GREEN"
    },
    {
        question: "When does the alternate braking system become operational/active?",
        options: [
            "The failure of the Alternate Brake Control Unit (ABCU)",
            "The failure of the autobrakes",
            "The failure of the green hydraulic system"
        ],
        answer: "The failure of the green hydraulic system"
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
        question: "The emergency lights can be activated from the flight attendant station:",
        options: [
            "Only if the EMER LT switch on the overhead SIGNS panel is in the ARM position",
            "Only if the EMER LT switch on the overhead SIGNS panel is in the OFF position",
            "Regardless of which position the EMER LT switch on the overhead SIGNS panel"
        ],
        answer: "Regardless of which position the EMER LT switch on the overhead SIGNS panel"
    },
    {
        question: "The cabin oxygen masks automatically deploy (\"drop\"when the cabin altitude exceeds:",
        options: [
            "10,000 feet",
            "12,500 feet",
            "14,000 feet"
        ],
        answer: "14,000 feet"
    },
    {
        question: "Which of the following statements best describe the use of engine bleed air",
        options: [
            "The Bleed Monitoring Computers (BMCs) open the HP valve when IP air is insufficient to meet system demand. HP air replaces IP air as the source of bleed air.",
            "the BMCs use HP air to augment IP air when necessary. HP and IP bleed air are used simultaneously during high demand",
            "The BMCs only open the HP valve during ground operations"
        ],
        answer: "The Bleed Monitoring Computers (BMCs) open the HP valve when IP air is insufficient to meet system demand. HP air replaces IP air as the source of bleed air."
    },
    {
        question: "If engine 1 bleed valve fails in the closed position, engine anti-ice is:",
        options: [
            "Provided through electric heating",
            "Unavailable to that engine",
            "Unaffected since engine anti-ice is provided by hot bleed air supply that is independent of the pneumatic system"
        ],
        answer: "Unaffected since engine anti-ice is provided by hot bleed air supply that is independent of the pneumatic system"
    },
    {
        question: "If the engines and APU are running with the APU bleed valve open, the BMCs:",
        options: [
            "Close the engine bleed valves giving priority to APU bleed air",
            "Close the APU bleed valve and opens the engine bleec valves giving priority to engine bleed air",
            "Open the engine bleed valves and allow the engine and APU bleed air to pressurize the pneumatic system simultaneously"
        ],
        answer: "Close the engine bleed valves giving priority to APU bleed air"
    },
    {
        question: "All of the following are required to start the APU except:",
        options: [
            "BAT pbs selected to AUTO",
            "APU MASTER and START switches to ON",
            "EXT PWR pb selected to ON"
        ],
        answer: "EXT PWR pb selected to ON"
    },
    {
        question: "APU bleed air may be used for all of the following except:",
        options: [
            "Engine starting",
            "Pack operation",
            "Wing ant-ice"
        ],
        answer: "Wing ant-ice"
    },
    {
        question: "Which of the following is true concerning FADEC?",
        options: [
            "Potects the engine from exceeding EGT limits during automatic starts on the ground only",
            "Protects the engine from exceeding EGT limits during all automatic starts",
            "Protects the engine from exceeding EGT limits during all automatic and manual engine starts"
        ],
        answer: "Potects the engine from exceeding EGT limits during automatic starts on the ground only"
    },
    {
        question: "If the ENG MODE selector is moved to the CRANK position:",
        options: [
            "The engine will motor when the overhead ENG MAN START pb is selected ON",
            "Fuel and ignition are inhibited",
            "The engine will begin to motor immediately with fuel and ignition inhibited"
        ],
        answer: "The engine will motor when the overhead ENG MAN START pb is selected ON"
    },
    {
        question: "Which of the following is true?",
        options: [
            "FADEC will only prevent the engine from exceeding RPM limits in reverse thrust",
            "FADEC will always prevent the engine from exceeding RPM limits and EGT limits",
            "FADEC will prevent the engine from exceeding RPM limits in both forward and reverse thrust"
        ],
        answer: "FADEC will prevent the engine from exceeding RPM limits in both forward and reverse thrust"
    },
    {
        question: "On the ground with an engine shut down, can the pilot deploy that engine's thrust reverser blocker doors and translating sleeve from the cockpit?",
        options: [
            "Yes, as long as the YELLOW hydraulic system is pressurized",
            "Yes, as long as GREEN hydraulic system is pressurized",
            "No, the blocker doors and translating sleeve cannot be deployed on an inoperative engine from the cockpit"
        ],
        answer: "No, the blocker doors and translating sleeve cannot be deployed on an inoperative engine from the cockpit"
    },
    {
        question: "If Cabin Pressure Controller 1 fails, what occurs automatically provided no other abnormals are present?",
        options: [
            "The manual mode activates",
            "Cabin Pressure Controller 2 activates",
            "The outflow valve drives full open"
        ],
        answer: "Cabin Pressure Controller 2 activates"
    },
    {
        question: "If the LDG ELEV selector is in the AUTO position, the active Cabin Pressure Controller receives destination field elevation from what source?",
        options: [
            "ADIRS",
            "FMS",
            "ACARS"
        ],
        answer: "FMS"
    },
    {
        question: "A return to the departure airport is required immediately after takeoff. Which statement is true regarding automatic pressurization?",
        options: [
            "The pilot must select the manual mode (MODE SEL pb to MAN)",
            "The active pressure controller automatically returns the cabin altitude to departure field elevation",
            "The outflow valve remains in its last position"
        ],
        answer: "The active pressure controller automatically returns the cabin altitude to departure field elevation"
    },
    {
        question: "Which of the following statements best describes the function of the safety valves?",
        options: [
            "They prevent excessive positive differential pressure only",
            "They prevent excessive positive or negative differential pressure",
            "They prevent excessive negative differential pressure only"
        ],
        answer: "They prevent excessive positive or negative differential pressure"
    },
    {
        question: "An emergency call from the cabin results in the flashing of what ACP legend?",
        options: [
            "MECH",
            "ATT",
            "CALL"
        ],
        answer: "ATT"
    },
    {
        question: "Which of the following statements regarding the emergency electrical configuration is true?",
        options: [
            "The emergency generator provides only emergency DC power",
            "The RAT automatically extends and the emergency generator connects if AC BUS 1 and AC BUS 2 are unpowered in-flight",
            "The RAT must be manually extended using the RAT MAN ON pb if AC BUS 1 and AC BUS 2 are unpowered in-light"
        ],
        answer: "The RAT automatically extends and the emergency generator connects if AC BUS 1 and AC BUS 2 are unpowered in-flight"
    },
    {
        question: "The red disk on the outside of the fuselage adjacent to the APU compartment indicates:",
        options: [
            "The APU fire bottle has discharged due to over pressure",
            "The APU fire bottle has not been discharged due to over pressure",
            "The APU fire bottle requires servicing"
        ],
        answer: "The APU fire bottle has not been discharged due to over pressure"
    },
    {
        question: "The crew should expect the red SMOKE light on the CARGO SMOKE panel:",
        options: [
            "To extinguish after discharging the fire bottle",
            "To remain illuminated even if the source of the smoke is extinguished after discharging the fire bottle",
            "To flash indicating the source of the smoke is still present after discharging the fire bottle"
        ],
        answer: "To remain illuminated even if the source of the smoke is extinguished after discharging the fire bottle"
    },
    {
        question: "The pilot is hand flying the aircraft in normal law and initiates a 30 degree bank. Which of the following is true?",
        options: [
            "Beyond 25 degrees of bank, sidestick pressure must be continuously applied to maintain the desired bank angle",
            "If the sidestick is released at 30 degrees of bank, the aircraft will maintain 30 degrees of bank indefinitely",
            "If the sidestick is released at 30 degrees of bank, positive piral stability returns the bank angle to 25 degrees"
        ],
        answer: "If the sidestick is released at 30 degrees of bank, the aircraft will maintain 30 degrees of bank indefinitely"
    },
    {
        question: "Which of the following statements is NOT true about rudder control?",
        options: [
            "In normal law, the FACs provide turn coordination and yaw dampening without rudder pedal deflection",
            "Mechanical control of the rudder does not require hydraulic power",
            "The FACs provide rudder limiting based on airspeed"
        ],
        answer: "Mechanical control of the rudder does not require hydraulic power"
    },
    {
        question: "If flaps FULL is selected with the speedbrakes extended:",
        options: [
            "The flaps will not extend until the speedbrakes are fully retracted",
            "The speedbrakes will automatically retract",
            "The flaps will extend and the speedbrakes remain extended. There will be an ECAM warning message"
        ],
        answer: "The speedbrakes will automatically retract"
    },
    {
        question: "If the outer tank fuel transfer valves open in-flight, they are commanded closed:",
        options: [
            "By pushing the TRANSFER pb",
            "Automatically during the refueling process",
            "automatically in-flight when all outer tank fuel has"
        ],
        answer: "Automatically during the refueling process"
    },
    {
        question: "If a GREEN ENG 1 PUMP failure occurs:",
        options: [
            "The PTU transfers YELLOW system fluid to operate the GREEN system",
            "The PTU automatically pressurizes the GREEN system without transferring any fluid",
            "The PTU transfers BLUE system fluid to operate the GREEN system"
        ],
        answer: "The PTU automatically pressurizes the GREEN system without transferring any fluid"
    },
    {
        question: "Which of the following best describes the YELLOW hydraulic system after pushing the ENG 2 FIRE pb?",
        options: [
            "ENG 2 PUMP deactivated and ENG 2 The PTU transfers GREEN system fluid to operate the YELLOW system",
            "ENG 2 PUMP deactivated and ENG 2 FIRE valve closed.The PTU operates the YELLOW system",
            "NG 2 PUMP deactivated and ENG 2 FIRE valve closed. he PTU does not operate the YELLOW system"
        ],
        answer: "ENG 2 PUMP deactivated and ENG 2 FIRE valve closed.The PTU operates the YELLOW system"
    },
    {
        question: "In addition to inhibiting the PTU between engine starts; it is also inhibited during what?",
        options: [
            "Engine failure",
            "Cargo door operation",
            "YELLOW ELEC PUMP pb selected to ON"
        ],
        answer: "Cargo door operation"
    },
    {
        question: "When is the BLUE hydraulic system pressurized with the BLUE ELEC PUMP in AUTO?",
        options: [
            "After selecting the BLUE ELECP PUMP to ON after engine",
            "Automatically, after the first engine start",
            "Automatically, after both engines are started"
        ],
        answer: "Automatically, after the first engine start"
    },
    {
        question: "If electrical power supply to the engine anti-ice valve fails, the engine anti-ice valve:",
        options: [
            "Closes",
            "Opens",
            "Remains in its current position"
        ],
        answer: "Opens"
    },
    {
        question: "Which hydraulic system does the alternate braking system use",
        options: [
            "GREEN",
            "YELLOW",
            "BLUE"
        ],
        answer: "YELLOW"
    },
    {
        question: "The crew performs a landing with autobrakes selected to MED. What triggers the application of the autobrakes?",
        options: [
            "The application of the brake pedals by the pilot",
            "The signal to extend the spoilers",
            "Reverse thrust is selected"
        ],
        answer: "The signal to extend the spoilers"
    },
    {
        question: "When illuminated, the overhead emergency lights and EXIT signs are powered by either the bus or what other power source?",
        options: [
            "AC BUS 1",
            "Internal batteries",
            "BAT BUS"
        ],
        answer: "Internal batteries"
    },
    {
        question: "A fast alignment occurs by selecting the rotary MODE selector from NAV to OFF and back to NAV within how many seconds?",
        options: [
            "Ten",
            "Five",
            "Three"
        ],
        answer: "Five"
    },
    {
        question: "ADIRU # 2 normally supplies ADR and IR information for which displays?",
        options: [
            "Captain's PFD and ND",
            "First officer's PFD and ND",
            "Captain's PFD and first officer's ND"
        ],
        answer: "First officer's PFD and ND"
    },
    {
        question: "At the gate, if the ADIRUs are powered by the aircraft batteries, all of the following occur except?",
        options: [
            "The ON BAT light on the ADIRS panel illuminates",
            "ECAM ADIRS ON BAT fault message is generated",
            "The external horn is activated"
        ],
        answer: "ECAM ADIRS ON BAT fault message is generated"
    },
    {
        question: "In the AUTO position, the XBLEED (crossbleed) valve will:",
        options: [
            "Open when the APU bleed valve opens",
            "Normally be open",
            "Open if a leak is detected"
        ],
        answer: "Open when the APU bleed valve opens"
    },
    {
        question: "The wings contain what type of bleed leak detection?",
        options: [
            "Single loop",
            "Dual loop",
            "Triple lindy"
        ],
        answer: "Dual loop"
    },
    {
        question: "During an automatic start in-flight, FADEC provides all of the following except:",
        options: [
            "Abnormal start indications",
            "Abort authority",
            "N1 and N2 limits protection"
        ],
        answer: "Abort authority"
    },
    {
        question: "If performing a manual engine start (overhead ENG MAN START pb ON):",
        options: [
            "FADEC opens the start valve and provides ignition and tue flow 30 seconds after the ENG MASTER switch is selected ON",
            "Ignition and fuel flow occur when the respective ENG MASTER switch is selected ON",
            "FADEC only opens and closes the start valve"
        ],
        answer: "Ignition and fuel flow occur when the respective ENG MASTER switch is selected ON"
    },
    {
        question: "In the event of an engine flame-out:",
        options: [
            "Continuous ignition is only activated by selecting the ENG MODE selector to IGN/START",
            "FADEC automatically provides continuous ignition on both engines",
            "Continuous ignition is unavailable"
        ],
        answer: "FADEC automatically provides continuous ignition on both engines"
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
        question: "Which of the following is true?",
        options: [
            "Each engine shares oil with its respective IDG",
            "Each IDG has its own oil supply which is cooled by fuel",
            "Each IDG has its own oil supply which is cooled by ambient air"
        ],
        answer: "Each IDG has its own oil supply which is cooled by fuel"
    },
    {
        question: "Once activated, how can you cancel the EVAC alert from the cockpit?",
        options: [
            "HORN SHUT OFF.",
            "COMMAND switchs.",
            "Only able to deactivate from cabin.",
            "OFF switch."
        ],
        answer: "COMMAND switchs."
    },
    {
        question: "When the door arming lever is in the ARMED position, opening the door from the outside will:",
        options: [
            "The power assist will rapidly open the door.",
            "Automatically deploy and inflate the evacuation slide.",
            "Only arm the slide.",
            "Disarm the door."
        ],
        answer: "Disarm the door."
    },
    {
        question: "The message OUTER TK FUEL XFRD appears in the MEMO. What does this mean?",
        options: [
            "It is a reminder to show that a transfer valve is open.",
            "Fuel is transferring from the center tank to the inner tank.",
            "It is a reminder to open the outer tank transfer valve.",
            "Fuel is transferring from the inner tank to the outer tank."
        ],
        answer: "It is a reminder to show that a transfer valve is open."
    },
    {
        question: "From which tanks will fuel gravity feed?",
        options: [
            "Outer cell of the wing tanks, inner cell of the wing tanks, and/or center tank.",
            "Inner cell of the wing tanks, and center tank.",
            "Outer cell of the wing tanks, and inner cell of the wing tank",
            "The center tank only."
        ],
        answer: "Outer cell of the wing tanks, and inner cell of the wing tank"
    },
    {
        question: "Which hydraulic systems) supply pressure to the landing gear system?",
        options: [
            "Green",
            "Blue",
            "Yellow and Blue",
            "Green and blue."
        ],
        answer: "Green"
    },
    {
        question: "What does pushing the APPR push button do?",
        options: [
            "Arms the Flight Guidance system to capture a localiser and glide slope",
            "Arms managed navigation.",
            "Allows the aircraft to slow to green dot speed.",
            "Arms managed vertical navigation."
        ],
        answer: "Arms the Flight Guidance system to capture a localiser and glide slope"
    },
    {
        question: "The weather radar image can be displayed on which modes of the ND?",
        options: [
            "All modes except Plan.",
            "Rose VOR or Rose ILS.",
            "Rose NAV or ARC.",
            "Rose NAV or VOR."
        ],
        answer: "All modes except Plan."
    },
    {
        question: "On board the A320 aircraft, there are ... identical ADIRUs and ... GPS receivers",
        options: [
            "2, 2",
            "3, 2",
            "3, 3",
            "3, 1"
        ],
        answer: "3, 2"
    },
    {
        question: "The amber ON BAT light illuminates on the ADIRS panel:",
        options: [
            "When the aircraft battery supplies at least one IRS.",
            "Fast alignment is in progress.",
            "Both other answers are correct."
        ],
        answer: "When the aircraft battery supplies at least one IRS."
    },
    {
        question: "Which is NOT a basic mode of GPWS?",
        options: [
            "Excessive rate of descent.",
            "Excessive terrain closure rate.",
            "Altitude loss after takeoff, or go-around.",
            "Deviation above the glideslope."
        ],
        answer: "Deviation above the glideslope."
    },
    {
        question: "At approximately what cabin altitude should the passenger oxygen masks drop?",
        options: [
            "12,500 feet",
            "15,000 feet",
            "10,000 feet",
            "14,000 feet"
        ],
        answer: "14,000 feet"
    },
    {
        question: "Approximately how long are the passenger oxygen generators able to produce oxygen?",
        options: [
            "15 minutes",
            "30 minutes",
            "20 minutes",
            "25 minutes"
        ],
        answer: "15 minutes"
    },
    {
        question: "The APU may be started up to what altitude?",
        options: [
            "The APU can be started at any altitude provided normal aircraft electrical power is available.",
            "The APU can be started up to 35,000 feet using only the aircraft batteries.",
            "The APU can be started up to 30,000 feet using only the aircraft batteries.",
            "Both A and B are correct."
        ],
        answer: "The APU can be started at any altitude provided normal aircraft electrical power is available."
    },
    {
        question: "What happens to the cockpit door with electrical power failure?",
        options: [
            "It operates normally on HOT BAT bus.",
            "It automatically locks.",
            "It automatically unlocks.",
            "None of the above."
        ],
        answer: "It automatically unlocks."
    },
    {
        question: "What does illumination of the white SLIDE ARMED light represent on the main cabin door?",
        options: [
            "This indicates that the slide has properly inflated and is safe for use.",
            "This indicates that the slide is armed and the slide will inflate if the door is opened from inside the aircraft.",
            "This indicates that the main cabin door has not been properly closed.",
            "This indicates that the main cabin door has not been roperly closed but the slide is properly armed."
        ],
        answer: "This indicates that the slide is armed and the slide will inflate if the door is opened from inside the aircraft."
    },
    {
        question: "How is it determined that the cockpit sliding window is closed and locked?",
        options: [
            "The red ring below the release button should not be in view.",
            "The locking pin was placed in the forward position when the window was closed.",
            "The red ring below the release button should be in view"
        ],
        answer: "The red ring below the release button should be in view"
    },
    {
        question: "During a manual start, how is the start valve opened?",
        options: [
            "It is automatic once the ENG MASTER is placed to the ON position",
            "By depressing the ENG MAN START pushbutton on the overhead panel.",
            "By depressing the ENG MAN START pushbutton on the overhead panel while the ENG MODE selector is out of the NORM position."
        ],
        answer: "By depressing the ENG MAN START pushbutton on the overhead panel while the ENG MODE selector is out of the NORM position."
    },
    {
        question: "If the lower ECAM DU fails, is there a way to retrieve that information?",
        options: [
            "By pressing and holding the related systems page push button on the ECAM control panel, the page will be displayed on the UPPER ECAM.",
            "By rotating the ECAM/ND XFR switch on the switching panel, the lower ECAM page will be transferred to either the Captain or FO's ND.",
            "Both A and B are WRONG.",
            "Both A and B are correct."
        ],
        answer: "Both A and B are correct."
    },
    {
        question: "After a single DMC failure, how could a crew member recover the display units?",
        options: [
            "Rotate the EIS DMC switch on the switching panel to replace the failed DC with DC #3.",
            "Once a DMC has failed, the information is unrecoverable.",
            "It is done automatically.",
            "None of the above."
        ],
        answer: "Rotate the EIS DMC switch on the switching panel to replace the failed DC with DC #3."
    },
    {
        question: "During descent, the cabin pressure rate is controlled in a way that:",
        options: [
            "The cabin is slightly pressurized at landing",
            "The cabin descends at 1000 feet per minute",
            "The aircraft is fully depressurized prior to landing"
        ],
        answer: "The cabin is slightly pressurized at landing"
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
        question: "Which statement is true?",
        options: [
            "Black circuit breakers are monitored by the ECAM",
            "Green circuit breakers are monitored by the ECAM",
            "Red circuit breakers are monitored by the ECAM"
        ],
        answer: "Green circuit breakers are monitored by the ECAM"
    },
    {
        question: "The presence of FAULT lights on both PACK pbs during preflight without an ECAM fault message most likely indicates what?",
        options: [
            "No bleed air available",
            "Pack overheat",
            "The pack pbs are selected to OFF"
        ],
        answer: "No bleed air available"
    },
    {
        question: "Prior to engine start, the EXT PWR pb indicates AVAIL and the APU START pb indicates AVAIL, what source is powering the aircraft?",
        options: [
            "The APU",
            "External power",
            "The aircraft electrical systems are not powered"
        ],
        answer: "The APU"
    },
    {
        question: "Cockpit voice recorder is energized on GND as soon as ACT electrical network is supplied but only for 5 minutes. It starts again as soon as:",
        options: [
            "GND CTL is on",
            "One engine is running",
            "A and B"
        ],
        answer: "A and B"
    },
    {
        question: "In normal law, what is the maximum bank angle obtainable with the sidestick fully deflected?",
        options: [
            "33 degrees",
            "67 degrees",
            "There is no bank limitation in normal law"
        ],
        answer: "67 degrees"
    },
    {
        question: "If an engine fire detection loop fails (ECAM displays ENG 1 FIRE LOOP A FAULT):",
        options: [
            "Fire detection for that engine is unavailable",
            "The other loop can provide fire detection",
            "The pilot must select the other loop (loop B)"
        ],
        answer: "The other loop can provide fire detection"
    },
    {
        question: "Performing a manual ILS approach (AP Off, FD and ATHR On), the thrust reduction for landing:",
        options: [
            "Is manually performed.",
            "Is always automatic.",
            "Is automatic with A/THR On."
        ],
        answer: "Is manually performed."
    },
    {
        question: "If RMP # 2 is set to tune a navaid (i.e., the NAV pb is selected on and the green light is illuminated), which FMGC(s) lose auto tuning capability?",
        options: [
            "FMGC # 2",
            "FMGC # 1",
            "Both FMGCs"
        ],
        answer: "Both FMGCs"
    },
    {
        question: "The normal FMGC operation is:",
        options: [
            "Only one FMGC can operate at a time",
            "FMGC 1 has priority, FMGC 2 is in STBY",
            "FMC's operate according to master/slave principle",
            "MC's operate independently"
        ],
        answer: "FMC's operate according to master/slave principle"
    },
    {
        question: "The FMGC functions are:",
        options: [
            "Flight guidance and flight envelope protection",
            "Flight management and flight envelope protection",
            "Flight management and flight guidance",
            "Flight envelope protection and yaw axis control"
        ],
        answer: "Flight management and flight guidance"
    },
    {
        question: "RAM air inlet, when set to ON will open:",
        options: [
            "In any case",
            "Provided ditching is not selected",
            "Provided delta P < 1 PSI and ditching not selected"
        ],
        answer: "Provided delta P < 1 PSI and ditching not selected"
    },
    {
        question: "In NORMAL LAW, the SIDESTICK commands a LOAD FACTOR demanIn what situation does the SIDESTICK command an ANGLE OF ATTACK demand?",
        options: [
            "At bank angle > 33°.",
            "After the Stall Warning has activated.",
            "When the ANGLE OF ATTACK protection activates."
        ],
        answer: "When the ANGLE OF ATTACK protection activates."
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
        question: "For ACFT position determination, FMGC uses data from:",
        options: [
            "3 ADIRS",
            "DME, VOR, ILS, GPS",
            "Both A & B"
        ],
        answer: "Both A & B"
    },
    {
        question: "To activate the voice recorder before engine start you have to press:",
        options: [
            "The \"CVR ERASE\" p/b",
            "The \"GND CTL\" p/b",
            "The \"CVR TEST\" p/b"
        ],
        answer: "The \"GND CTL\" p/b"
    },
    {
        question: "In case of a CPC 1 failure in flight:",
        options: [
            "Manual control has to be used",
            "The system transfers automatically to controller 2",
            "Controller 2 must be manually selected",
            "Landing elevation must be set on the landing elevation knob"
        ],
        answer: "The system transfers automatically to controller 2"
    },
    {
        question: "Standby nav has been selected by the use of nav keys:",
        options: [
            "VHF function is lost on this RMP",
            "VHF is still available but only the last frequency selected can be used",
            "Nav key has no effect on radio com freq selection"
        ],
        answer: "Nav key has no effect on radio com freq selection"
    },
    {
        question: "When the \"ditching\" switch is selected ON, a closure sugnal is sent to:",
        options: [
            "The outflow valve and pack flow control valves",
            "The ram air inlet and ventilation inlet and extract valves",
            "All asnwers are correct"
        ],
        answer: "All asnwers are correct"
    },
    {
        question: "The APU fire protection system is different from the engine fire protection system in that:",
        options: [
            "The APU uses a carbon dioxide fire bottle",
            "The APU is protected by only one fire bottle",
            "The APU fire can only be manually discharged"
        ],
        answer: "The APU is protected by only one fire bottle"
    },
    {
        question: "The zone temperature selectors on AIR COND panel perform what function?",
        options: [
            "Modulate the trim air valves",
            "Signal temperature demands to the AC controllers",
            "Modulate the pack bypass valves"
        ],
        answer: "Modulate the trim air valves"
    },
    {
        question: "In the event of and engine fire, the respective ENG FIRE pb and RNG panel FIRE light iluminate red until:",
        options: [
            "The respective ENG FIRE pb is pushed and released",
            "The fire is out",
            "The respective ENG MASTER switch is selected OFF"
        ],
        answer: "The fire is out"
    },
    {
        question: "If and IDG pb is pushed in response to an abnormal condition",
        options: [
            "The pilot may push it again to reconnect the IDG",
            "The pilot is merely backing up the auto disconnect feature of the IDG",
            "The IDG can only be reconnected by maintanance"
        ],
        answer: "The IDG can only be reconnected by maintanance"
    },
    {
        question: "By accident, you hold the SIDESTICK deflected for too long, and are alredy at 45 degrees bank. You realise your mistake, and release the SIDESTICK. What happens next?",
        options: [
            "The aircraft maintains 45 degrees of bank",
            "The aircraft reduces the bank angle to 33 degrees",
            "The aircraft reduces thebank angle to 0 degrees"
        ],
        answer: "The aircraft reduces the bank angle to 33 degrees"
    }
    
];