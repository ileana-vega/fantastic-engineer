(()=>{
"use strict";

const drives=[{"family":"VFD-EL","model":"VFD002EL11A","voltage":"115","phase":"1","kw":"0.2","hp":"0.25","enclosure":"IP20","emc":"Sin filtro indicado","current":"","hd":"","nd":"","frequency":"","description":"VFD-EL, 0.25 HP, 115 V, Micro drive","buyUrl":"https://ceitsa.com.mx/p/VFD002EL11A","quoteUrl":"","buyValidated":true,"frame":"A"},{"family":"VFD-EL","model":"VFD002EL21A","voltage":"230","phase":"1","kw":"0.2","hp":"0.25","enclosure":"IP20","emc":"Sin filtro indicado","current":"","hd":"","nd":"","frequency":"","description":"VFD-EL, 0.25 HP, 230 V, Micro drive","buyUrl":"https://ceitsa.com.mx/p/VFD002EL21A","quoteUrl":"","buyValidated":true,"frame":"A"},{"family":"VFD-EL","model":"VFD002EL23A","voltage":"230","phase":"3","kw":"0.2","hp":"0.25","enclosure":"IP20","emc":"Sin filtro indicado","current":"","hd":"","nd":"","frequency":"","description":"VFD-EL, 0.25 HP, 230 V, Micro drive","buyUrl":"https://ceitsa.com.mx/p/VFD002EL23A","quoteUrl":"","buyValidated":true,"frame":"A"},{"family":"VFD-EL","model":"VFD004EL11A","voltage":"115","phase":"1","kw":"0.4","hp":"0.5","enclosure":"IP20","emc":"Sin filtro indicado","current":"","hd":"","nd":"","frequency":"","description":"VFD-EL, 0.5 HP, 115 V, Micro drive","buyUrl":"https://ceitsa.com.mx/p/VFD004EL11A","quoteUrl":"","buyValidated":true,"frame":"A"},{"family":"VFD-EL","model":"VFD004EL21A","voltage":"230","phase":"1","kw":"0.4","hp":"0.5","enclosure":"IP20","emc":"Sin filtro indicado","current":"","hd":"","nd":"","frequency":"","description":"VFD-EL, 0.5 HP, 230 V, Micro drive","buyUrl":"https://ceitsa.com.mx/p/VFD004EL21A","quoteUrl":"","buyValidated":true,"frame":"A"},{"family":"VFD-EL","model":"VFD004EL23A","voltage":"230","phase":"3","kw":"0.4","hp":"0.5","enclosure":"IP20","emc":"Sin filtro indicado","current":"","hd":"","nd":"","frequency":"","description":"VFD-EL, 0.5 HP, 230 V, Micro drive","buyUrl":"https://ceitsa.com.mx/p/VFD004EL23A","quoteUrl":"","buyValidated":true,"frame":"A"},{"family":"VFD-EL","model":"VFD004EL43A","voltage":"480","phase":"3","kw":"0.4","hp":"0.5","enclosure":"IP20","emc":"Sin filtro indicado","current":"","hd":"","nd":"","frequency":"","description":"VFD-EL, 0.5 HP, 480 V, Micro drive","buyUrl":"https://ceitsa.com.mx/p/VFD004EL43A","quoteUrl":"","buyValidated":true,"frame":"A"},{"family":"VFD-EL","model":"VFD007EL11A","voltage":"115","phase":"1","kw":"0.75","hp":"1","enclosure":"IP20","emc":"Sin filtro indicado","current":"","hd":"","nd":"","frequency":"","description":"VFD-EL, 1 HP, 115 V, Micro drive","buyUrl":"https://ceitsa.com.mx/p/VFD007EL11A","quoteUrl":"","buyValidated":true,"frame":"B"},{"family":"VFD-EL","model":"VFD007EL21A","voltage":"230","phase":"1","kw":"0.75","hp":"1","enclosure":"IP20","emc":"Sin filtro indicado","current":"","hd":"","nd":"","frequency":"","description":"VFD-EL, 1 HP, 230 V, Micro drive","buyUrl":"https://ceitsa.com.mx/p/VFD007EL21A","quoteUrl":"","buyValidated":true,"frame":"A"},{"family":"VFD-EL","model":"VFD007EL23A","voltage":"230","phase":"3","kw":"0.75","hp":"1","enclosure":"IP20","emc":"Sin filtro indicado","current":"","hd":"","nd":"","frequency":"","description":"VFD-EL, 1 HP, 230 V, Micro drive","buyUrl":"https://ceitsa.com.mx/p/VFD007EL23A","quoteUrl":"","buyValidated":true,"frame":"A"},{"family":"VFD-EL","model":"VFD007EL43A","voltage":"480","phase":"3","kw":"0.75","hp":"1","enclosure":"IP20","emc":"Sin filtro indicado","current":"","hd":"","nd":"","frequency":"","description":"VFD-EL, 1 HP, 480 V, Micro drive","buyUrl":"https://ceitsa.com.mx/p/VFD007EL43A","quoteUrl":"","buyValidated":true,"frame":"A"},{"family":"VFD-EL","model":"VFD015EL21A","voltage":"230","phase":"1","kw":"1.5","hp":"2","enclosure":"IP20","emc":"Sin filtro indicado","current":"","hd":"","nd":"","frequency":"","description":"VFD-EL, 2 HP, 230 V, Micro drive","buyUrl":"https://ceitsa.com.mx/p/VFD015EL21A","quoteUrl":"","buyValidated":true,"frame":"B"},{"family":"VFD-EL","model":"VFD015EL23A","voltage":"230","phase":"3","kw":"1.5","hp":"2","enclosure":"IP20","emc":"Sin filtro indicado","current":"","hd":"","nd":"","frequency":"","description":"VFD-EL, 2 HP, 230 V, Micro drive","buyUrl":"https://ceitsa.com.mx/p/VFD015EL23A","quoteUrl":"","buyValidated":true,"frame":"A"},{"family":"VFD-EL","model":"VFD015EL43A","voltage":"480","phase":"3","kw":"1.5","hp":"2","enclosure":"IP20","emc":"Sin filtro indicado","current":"","hd":"","nd":"","frequency":"","description":"VFD-EL, 2 HP, 480 V, Micro drive","buyUrl":"https://ceitsa.com.mx/p/VFD015EL43A","quoteUrl":"","buyValidated":true,"frame":"A"},{"family":"VFD-EL","model":"VFD022EL21A","voltage":"230","phase":"1","kw":"2.2","hp":"3","enclosure":"IP20","emc":"Sin filtro indicado","current":"","hd":"","nd":"","frequency":"","description":"VFD-EL, 3 HP, 230 V, Micro drive","buyUrl":"https://ceitsa.com.mx/p/VFD022EL21A","quoteUrl":"","buyValidated":true,"frame":"B"},{"family":"VFD-EL","model":"VFD022EL23A","voltage":"230","phase":"3","kw":"2.2","hp":"3","enclosure":"IP20","emc":"Sin filtro indicado","current":"","hd":"","nd":"","frequency":"","description":"VFD-EL, 3 HP, 230 V, Micro drive","buyUrl":"https://ceitsa.com.mx/p/VFD022EL23A","quoteUrl":"","buyValidated":true,"frame":"B"},{"family":"VFD-EL","model":"VFD022EL43A","voltage":"480","phase":"3","kw":"2.2","hp":"3","enclosure":"IP20","emc":"Sin filtro indicado","current":"","hd":"","nd":"","frequency":"","description":"VFD-EL, 3 HP, 480 V, Micro drive","buyUrl":"https://ceitsa.com.mx/p/VFD022EL43A","quoteUrl":"","buyValidated":true,"frame":"B"},{"family":"VFD-EL","model":"VFD037EL23A","voltage":"230","phase":"3","kw":"3.7","hp":"5","enclosure":"IP20","emc":"Sin filtro indicado","current":"","hd":"","nd":"","frequency":"","description":"VFD-EL, 5 HP, 230 V, Micro drive","buyUrl":"https://ceitsa.com.mx/p/VFD037EL23A","quoteUrl":"","buyValidated":true,"frame":"B"},{"family":"VFD-EL","model":"VFD037EL43A","voltage":"480","phase":"3","kw":"3.7","hp":"5","enclosure":"IP20","emc":"Sin filtro indicado","current":"","hd":"","nd":"","frequency":"","description":"VFD-EL, 5 HP, 480 V, Micro drive","buyUrl":"https://ceitsa.com.mx/p/VFD037EL43A","quoteUrl":"","buyValidated":true,"frame":"B"},{"family":"VFD-EL-W","model":"VFD002EL21W-1","voltage":"230","phase":"1","kw":"0.2","hp":"0.25","enclosure":"IP20","emc":"Sin filtro indicado","current":"1.6","hd":"","nd":"","frequency":"","description":"VFD-EL-W, 0.25 HP, 230 V, 1 fase(s), 1.6 A, IP20","buyUrl":"https://ceitsa.com.mx/p/VFD002EL21W-1","quoteUrl":"","buyValidated":true,"frame":"A1"},{"family":"VFD-EL-W","model":"VFD004EL21W-1","voltage":"230","phase":"1","kw":"0.4","hp":"0.5","enclosure":"IP20","emc":"Sin filtro indicado","current":"1.6","hd":"","nd":"","frequency":"","description":"VFD-EL-W, 0.5 HP, 230 V, 1 fase(s), 1.6 A, IP20","buyUrl":"https://ceitsa.com.mx/p/VFD004EL21W-1","quoteUrl":"","buyValidated":true,"frame":"A1"},{"family":"VFD-EL-W","model":"VFD004EL43W-1","voltage":"460","phase":"3","kw":"0.4","hp":"0.5","enclosure":"IP20","emc":"Sin filtro indicado","current":"1.5","hd":"","nd":"","frequency":"","description":"VFD-EL-W, 0.5 HP, 460 V, 3 fase(s), 1.5 A, IP20","buyUrl":"https://ceitsa.com.mx/p/VFD004EL43W-1","quoteUrl":"","buyValidated":true,"frame":"A1"},{"family":"VFD-EL-W","model":"VFD007EL21W-1","voltage":"230","phase":"1","kw":"0.75","hp":"1","enclosure":"IP20","emc":"Sin filtro indicado","current":"4.2","hd":"","nd":"","frequency":"","description":"VFD-EL-W, 1 HP, 230 V, 1 fase(s), 4.2 A, IP20","buyUrl":"https://ceitsa.com.mx/p/VFD007EL21W-1","quoteUrl":"","buyValidated":true,"frame":"A1"},{"family":"VFD-EL-W","model":"VFD007EL43W-1","voltage":"460","phase":"3","kw":"0.75","hp":"1","enclosure":"IP20","emc":"Sin filtro indicado","current":"2.5","hd":"","nd":"","frequency":"","description":"VFD-EL-W, 1 HP, 460 V, 3 fase(s), 2.5 A, IP20","buyUrl":"https://ceitsa.com.mx/p/VFD007EL43W-1","quoteUrl":"","buyValidated":true,"frame":"A1"},{"family":"VFD-EL-W","model":"VFD015EL21W-1","voltage":"230","phase":"1","kw":"1.5","hp":"2","enclosure":"IP20","emc":"Sin filtro indicado","current":"7.5","hd":"","nd":"","frequency":"","description":"VFD-EL-W, 2 HP, 230 V, 1 fase(s), 7.5 A, IP20","buyUrl":"https://ceitsa.com.mx/p/VFD015EL21W-1","quoteUrl":"","buyValidated":true,"frame":"B"},{"family":"VFD-EL-W","model":"VFD015EL43W-1","voltage":"460","phase":"3","kw":"1.5","hp":"2","enclosure":"IP20","emc":"Sin filtro indicado","current":"4.2","hd":"","nd":"","frequency":"","description":"VFD-EL-W, 2 HP, 460 V, 3 fase(s), 4.2 A, IP20","buyUrl":"https://ceitsa.com.mx/p/VFD015EL43W-1","quoteUrl":"","buyValidated":true,"frame":"A2"},{"family":"VFD-EL-W","model":"VFD022EL21W-1","voltage":"230","phase":"1","kw":"2.2","hp":"3","enclosure":"IP20","emc":"Sin filtro indicado","current":"11","hd":"","nd":"","frequency":"","description":"VFD-EL-W, 3 HP, 230 V, 1 fase(s), 11 A, IP20","buyUrl":"https://ceitsa.com.mx/p/VFD022EL21W-1","quoteUrl":"","buyValidated":true,"frame":"B"},{"family":"VFD-EL-W","model":"VFD022EL43W-1","voltage":"460","phase":"3","kw":"2.2","hp":"3","enclosure":"IP20","emc":"Sin filtro indicado","current":"5.5","hd":"","nd":"","frequency":"","description":"VFD-EL-W, 3 HP, 460 V, 3 fase(s), 5.5 A, IP20","buyUrl":"https://ceitsa.com.mx/p/VFD022EL43W-1","quoteUrl":"","buyValidated":true,"frame":"B"},{"family":"VFD-EL-W","model":"VFD040EL43W-1","voltage":"460","phase":"3","kw":"4","hp":"5.5","enclosure":"IP20","emc":"Sin filtro indicado","current":"9","hd":"","nd":"","frequency":"","description":"VFD-EL-W, 5.5 HP, 460 V, 3 fase(s), 9 A, IP20","buyUrl":"https://ceitsa.com.mx/p/VFD040EL43W-1","quoteUrl":"","buyValidated":true,"frame":"B"},{"family":"MS300","model":"VFD11AMS21ANSAA","voltage":"230","phase":"1","kw":"2.2","hp":"3","enclosure":"IP20","emc":"Sin filtro","current":"","hd":"11","nd":"12.5","frequency":"599 Hz","description":"VFD-MS300, 3HP 2.2kW 230V 11A HD 12.5A ND 1ph IP20 599Hz","buyUrl":"https://ceitsa.com.mx/p/VFD11AMS21ANSAA","quoteUrl":"","buyValidated":true,"frame":"C"},{"family":"MS300","model":"VFD11AMS21MFSAA","voltage":"230","phase":"1","kw":"2.2","hp":"3","enclosure":"IP66 / NEMA 4X","emc":"Integrado C2","current":"","hd":"11","nd":"12.5","frequency":"599 Hz","description":"VFD-MS300, IP66/NEMA 4X/EMI Filter Built-in (C2 Class), 2.2kW","buyUrl":"","quoteUrl":"https://wa.me/5217201185420?text=Hola%2C%20quiero%20solicitar%20una%20cotizaci%C3%B3n%20del%20variador%20Delta%20VFD11AMS21MFSAA%20de%20la%20familia%20MS300.","buyValidated":false,"frame":"C"},{"family":"MS300","model":"VFD11AMS21MNSAA","voltage":"230","phase":"1","kw":"2.2","hp":"3","enclosure":"IP66 / NEMA 4X","emc":"Sin filtro","current":"","hd":"11","nd":"12.5","frequency":"599 Hz","description":"VFD-MS300, IP66/NEMA 4X Standard, 2.2kW","buyUrl":"","quoteUrl":"https://wa.me/5217201185420?text=Hola%2C%20quiero%20solicitar%20una%20cotizaci%C3%B3n%20del%20variador%20Delta%20VFD11AMS21MNSAA%20de%20la%20familia%20MS300.","buyValidated":false,"frame":"C"},{"family":"MS300","model":"VFD11AMS23ANSAA","voltage":"230","phase":"3","kw":"2.2","hp":"3","enclosure":"IP20","emc":"Sin filtro","current":"","hd":"11","nd":"12.5","frequency":"599 Hz","description":"VFD-MS300, 3HP 2.2kW 230V 11A HD 12.5A ND 3ph IP20 599Hz","buyUrl":"https://ceitsa.com.mx/p/VFD11AMS23ANSAA","quoteUrl":"","buyValidated":true,"frame":"C"},{"family":"MS300","model":"VFD11AMS23MNSAA","voltage":"230","phase":"3","kw":"2.2","hp":"3","enclosure":"IP66 / NEMA 4X","emc":"Sin filtro","current":"","hd":"11","nd":"12.5","frequency":"599 Hz","description":"VFD-MS300, IP66/NEMA 4X Standard, 2.2kW","buyUrl":"","quoteUrl":"https://wa.me/5217201185420?text=Hola%2C%20quiero%20solicitar%20una%20cotizaci%C3%B3n%20del%20variador%20Delta%20VFD11AMS23MNSAA%20de%20la%20familia%20MS300.","buyValidated":false,"frame":"C"},{"family":"MS300","model":"VFD13AMS43ANSAA","voltage":"480","phase":"3","kw":"5.5","hp":"7.5","enclosure":"IP20","emc":"Sin filtro","current":"","hd":"13","nd":"15.7","frequency":"599 Hz","description":"VFD-MS300, 7.5HP 5.5kW 480V 13A HD 15.7A ND 3ph IP20 599Hz","buyUrl":"https://ceitsa.com.mx/p/VFD13AMS43ANSAA","quoteUrl":"","buyValidated":true,"frame":"D"},{"family":"MS300","model":"VFD13AMS43MFSAA","voltage":"480","phase":"3","kw":"5.5","hp":"7.5","enclosure":"IP66 / NEMA 4X","emc":"Integrado C2","current":"","hd":"13","nd":"15.7","frequency":"599 Hz","description":"VFD-MS300, IP66/NEMA 4X/EMI Filter Built-in (C2 Class), 5.5kW","buyUrl":"","quoteUrl":"https://wa.me/5217201185420?text=Hola%2C%20quiero%20solicitar%20una%20cotizaci%C3%B3n%20del%20variador%20Delta%20VFD13AMS43MFSAA%20de%20la%20familia%20MS300.","buyValidated":false,"frame":"D"},{"family":"MS300","model":"VFD13AMS43MNSAA","voltage":"480","phase":"3","kw":"5.5","hp":"7.5","enclosure":"IP66 / NEMA 4X","emc":"Sin filtro","current":"","hd":"13","nd":"15.7","frequency":"599 Hz","description":"VFD-MS300, IP66/NEMA 4X Standard, 5.5kW","buyUrl":"","quoteUrl":"https://wa.me/5217201185420?text=Hola%2C%20quiero%20solicitar%20una%20cotizaci%C3%B3n%20del%20variador%20Delta%20VFD13AMS43MNSAA%20de%20la%20familia%20MS300.","buyValidated":false,"frame":"D"},{"family":"MS300","model":"VFD17AMS23ANSAA","voltage":"230","phase":"3","kw":"3.7","hp":"5","enclosure":"IP20","emc":"Sin filtro","current":"","hd":"17","nd":"19.5","frequency":"599 Hz","description":"VFD-MS300, 5HP 3.7kW 230V 17A HD 19.5A ND 3ph IP20 599Hz","buyUrl":"https://ceitsa.com.mx/p/VFD17AMS23ANSAA","quoteUrl":"","buyValidated":true,"frame":"C"},{"family":"MS300","model":"VFD17AMS23MNSAA","voltage":"230","phase":"3","kw":"3.7","hp":"5","enclosure":"IP66 / NEMA 4X","emc":"Sin filtro","current":"","hd":"17","nd":"19.5","frequency":"599 Hz","description":"VFD-MS300, IP66/NEMA 4X Standard, 3.7kW","buyUrl":"","quoteUrl":"https://wa.me/5217201185420?text=Hola%2C%20quiero%20solicitar%20una%20cotizaci%C3%B3n%20del%20variador%20Delta%20VFD17AMS23MNSAA%20de%20la%20familia%20MS300.","buyValidated":false,"frame":"C"},{"family":"MS300","model":"VFD17AMS43ANSAA","voltage":"480","phase":"3","kw":"7.5","hp":"10","enclosure":"IP20","emc":"Sin filtro","current":"","hd":"17","nd":"20.5","frequency":"599 Hz","description":"VFD-MS300, 10HP 7.5kW 480V 17A HD 20.5A ND 3ph IP20 599Hz","buyUrl":"https://ceitsa.com.mx/p/VFD17AMS43ANSAA","quoteUrl":"","buyValidated":true,"frame":"D"},{"family":"MS300","model":"VFD17AMS43MFSAA","voltage":"480","phase":"3","kw":"7.5","hp":"10","enclosure":"IP66 / NEMA 4X","emc":"Integrado C2","current":"","hd":"17","nd":"20.5","frequency":"599 Hz","description":"VFD-MS300, IP66/NEMA 4X/EMI Filter Built-in (C2 Class), 7.5kW","buyUrl":"","quoteUrl":"https://wa.me/5217201185420?text=Hola%2C%20quiero%20solicitar%20una%20cotizaci%C3%B3n%20del%20variador%20Delta%20VFD17AMS43MFSAA%20de%20la%20familia%20MS300.","buyValidated":false,"frame":"D"},{"family":"MS300","model":"VFD17AMS43MNSAA","voltage":"480","phase":"3","kw":"7.5","hp":"10","enclosure":"IP66 / NEMA 4X","emc":"Sin filtro","current":"","hd":"17","nd":"20.5","frequency":"599 Hz","description":"VFD-MS300, IP66/NEMA 4X Standard, 7.5kW","buyUrl":"","quoteUrl":"https://wa.me/5217201185420?text=Hola%2C%20quiero%20solicitar%20una%20cotizaci%C3%B3n%20del%20variador%20Delta%20VFD17AMS43MNSAA%20de%20la%20familia%20MS300.","buyValidated":false,"frame":"D"},{"family":"MS300","model":"VFD1A5MS43ANSAA","voltage":"480","phase":"3","kw":"0.4","hp":"0.5","enclosure":"IP20","emc":"Sin filtro","current":"","hd":"1.5","nd":"1.8","frequency":"599 Hz","description":"VFD-MS300, 1/2HP 0.4kW 480V 1.5A HD 1.8A ND 3ph IP20 599Hz","buyUrl":"https://ceitsa.com.mx/p/VFD1A5MS43ANSAA","quoteUrl":"","buyValidated":true,"frame":"A"},{"family":"MS300","model":"VFD1A5MS43MFSAA","voltage":"480","phase":"3","kw":"0.4","hp":"0.5","enclosure":"IP66 / NEMA 4X","emc":"Integrado C2","current":"","hd":"1.5","nd":"1.8","frequency":"599 Hz","description":"VFD-MS300, IP66/NEMA 4X/EMI Filter Built-in (C2 Class), 0.4kW","buyUrl":"","quoteUrl":"https://wa.me/5217201185420?text=Hola%2C%20quiero%20solicitar%20una%20cotizaci%C3%B3n%20del%20variador%20Delta%20VFD1A5MS43MFSAA%20de%20la%20familia%20MS300.","buyValidated":false,"frame":"A"},{"family":"MS300","model":"VFD1A5MS43MNSAA","voltage":"480","phase":"3","kw":"0.4","hp":"0.5","enclosure":"IP66 / NEMA 4X","emc":"Sin filtro","current":"","hd":"1.5","nd":"1.8","frequency":"599 Hz","description":"VFD-MS300, IP66/NEMA 4X Standard, 0.4kW","buyUrl":"","quoteUrl":"https://wa.me/5217201185420?text=Hola%2C%20quiero%20solicitar%20una%20cotizaci%C3%B3n%20del%20variador%20Delta%20VFD1A5MS43MNSAA%20de%20la%20familia%20MS300.","buyValidated":false,"frame":"A"},{"family":"MS300","model":"VFD1A6MS11ANSAA","voltage":"115","phase":"1","kw":"0.2","hp":"0.25","enclosure":"IP20","emc":"Sin filtro","current":"","hd":"1.6","nd":"1.8","frequency":"599 Hz","description":"VFD-MS300, 1/4HP 0.2kW 115V 1.6A HD 1.8A ND 1ph IP20 599Hz","buyUrl":"https://ceitsa.com.mx/p/VFD1A6MS11ANSAA","quoteUrl":"","buyValidated":true,"frame":"A"},{"family":"MS300","model":"VFD1A6MS21ANSAA","voltage":"230","phase":"1","kw":"0.2","hp":"0.25","enclosure":"IP20","emc":"Sin filtro","current":"","hd":"1.6","nd":"1.8","frequency":"599 Hz","description":"VFD-MS300, 1/4HP 0.2kW 230V 1.6A HD 1.8A ND 1ph IP20 599Hz","buyUrl":"https://ceitsa.com.mx/p/VFD1A6MS21ANSAA","quoteUrl":"","buyValidated":true,"frame":"A"},{"family":"MS300","model":"VFD1A6MS23ANSAA","voltage":"230","phase":"3","kw":"0.2","hp":"0.25","enclosure":"IP20","emc":"Sin filtro","current":"","hd":"1.6","nd":"1.8","frequency":"599 Hz","description":"VFD-MS300, 1/4HP 0.2kW 230V 1.6A HD 1.8A ND 3ph IP20 599Hz","buyUrl":"https://ceitsa.com.mx/p/VFD1A6MS23ANSAA","quoteUrl":"","buyValidated":true,"frame":"A"},{"family":"MS300","model":"VFD25AMS23ANSAA","voltage":"230","phase":"3","kw":"5.5","hp":"7.5","enclosure":"IP20","emc":"Sin filtro","current":"","hd":"25","nd":"27","frequency":"599 Hz","description":"VFD-MS300, 7.5HP 5.5kW 230V 25A HD 27A ND 3ph IP20 599Hz","buyUrl":"https://ceitsa.com.mx/p/VFD25AMS23ANSAA","quoteUrl":"","buyValidated":true,"frame":"D"},{"family":"MS300","model":"VFD25AMS23MNSAA","voltage":"230","phase":"3","kw":"5.5","hp":"7.5","enclosure":"IP66 / NEMA 4X","emc":"Sin filtro","current":"","hd":"25","nd":"27","frequency":"599 Hz","description":"VFD-MS300, IP66/NEMA 4X Standard, 5.5kW","buyUrl":"","quoteUrl":"https://wa.me/5217201185420?text=Hola%2C%20quiero%20solicitar%20una%20cotizaci%C3%B3n%20del%20variador%20Delta%20VFD25AMS23MNSAA%20de%20la%20familia%20MS300.","buyValidated":false,"frame":"D"},{"family":"MS300","model":"VFD25AMS43ANSAA","voltage":"480","phase":"3","kw":"11","hp":"15","enclosure":"IP20","emc":"Sin filtro","current":"","hd":"25","nd":"28","frequency":"599 Hz","description":"VFD-MS300, 15HP 11kW 480V 25A HD 28A ND 3ph IP20 599Hz","buyUrl":"https://ceitsa.com.mx/p/VFD25AMS43ANSAA","quoteUrl":"","buyValidated":true,"frame":"E"},{"family":"MS300","model":"VFD2A5MS11ANSAA","voltage":"115","phase":"1","kw":"0.4","hp":"0.5","enclosure":"IP20","emc":"Sin filtro","current":"","hd":"2.5","nd":"2.7","frequency":"599 Hz","description":"VFD-MS300, 1/2HP 0.4kW 115V 2.5A HD 2.7A ND 1ph IP20 599Hz","buyUrl":"https://ceitsa.com.mx/p/VFD2A5MS11ANSAA","quoteUrl":"","buyValidated":true,"frame":"A"},{"family":"MS300","model":"VFD2A7MS43ANSAA","voltage":"480","phase":"3","kw":"0.75","hp":"1","enclosure":"IP20","emc":"Sin filtro","current":"","hd":"2.7","nd":"3.0","frequency":"599 Hz","description":"VFD-MS300, 1HP 0.75kW 480V 2.7A HD 3.0A ND 3ph IP20 599Hz","buyUrl":"https://ceitsa.com.mx/p/VFD2A7MS43ANSAA","quoteUrl":"","buyValidated":true,"frame":"A"},{"family":"MS300","model":"VFD2A7MS43MFSAA","voltage":"480","phase":"3","kw":"0.75","hp":"1","enclosure":"IP66 / NEMA 4X","emc":"Integrado C2","current":"","hd":"2.7","nd":"3.0","frequency":"599 Hz","description":"VFD-MS300, IP66/NEMA 4X/EMI Filter Built-in (C2 Class), 0.75kW","buyUrl":"","quoteUrl":"https://wa.me/5217201185420?text=Hola%2C%20quiero%20solicitar%20una%20cotizaci%C3%B3n%20del%20variador%20Delta%20VFD2A7MS43MFSAA%20de%20la%20familia%20MS300.","buyValidated":false,"frame":"A"},{"family":"MS300","model":"VFD2A7MS43MNSAA","voltage":"480","phase":"3","kw":"0.75","hp":"1","enclosure":"IP66 / NEMA 4X","emc":"Sin filtro","current":"","hd":"2.7","nd":"3.0","frequency":"599 Hz","description":"VFD-MS300, IP66/NEMA 4X Standard, 0.75kW","buyUrl":"","quoteUrl":"https://wa.me/5217201185420?text=Hola%2C%20quiero%20solicitar%20una%20cotizaci%C3%B3n%20del%20variador%20Delta%20VFD2A7MS43MNSAA%20de%20la%20familia%20MS300.","buyValidated":false,"frame":"A"},{"family":"MS300","model":"VFD2A8MS21ANSAA","voltage":"230","phase":"1","kw":"0.4","hp":"0.5","enclosure":"IP20","emc":"Sin filtro","current":"","hd":"2.8","nd":"3.2","frequency":"599 Hz","description":"VFD-MS300, 1/2HP 0.4kW 230V 2.8A HD 3.2A ND 1ph IP20 599Hz","buyUrl":"https://ceitsa.com.mx/p/VFD2A8MS21ANSAA","quoteUrl":"","buyValidated":true,"frame":"A"},{"family":"MS300","model":"VFD2A8MS21MFSAA","voltage":"230","phase":"1","kw":"0.4","hp":"0.5","enclosure":"IP66 / NEMA 4X","emc":"Integrado C2","current":"","hd":"2.8","nd":"3.2","frequency":"599 Hz","description":"VFD-MS300, IP66/NEMA 4X/EMI Filter Built-in (C2 Class), 0.4kW","buyUrl":"","quoteUrl":"https://wa.me/5217201185420?text=Hola%2C%20quiero%20solicitar%20una%20cotizaci%C3%B3n%20del%20variador%20Delta%20VFD2A8MS21MFSAA%20de%20la%20familia%20MS300.","buyValidated":false,"frame":"A"},{"family":"MS300","model":"VFD2A8MS21MNSAA","voltage":"230","phase":"1","kw":"0.4","hp":"0.5","enclosure":"IP66 / NEMA 4X","emc":"Sin filtro","current":"","hd":"2.8","nd":"3.2","frequency":"599 Hz","description":"VFD-MS300, IP66/NEMA 4X Standard, 0.4kW","buyUrl":"","quoteUrl":"https://wa.me/5217201185420?text=Hola%2C%20quiero%20solicitar%20una%20cotizaci%C3%B3n%20del%20variador%20Delta%20VFD2A8MS21MNSAA%20de%20la%20familia%20MS300.","buyValidated":false,"frame":"A"},{"family":"MS300","model":"VFD2A8MS23ANSAA","voltage":"230","phase":"3","kw":"0.4","hp":"0.5","enclosure":"IP20","emc":"Sin filtro","current":"","hd":"2.8","nd":"3.2","frequency":"599 Hz","description":"VFD-MS300, 1/2HP 0.4kW 230V 2.8A HD 3.2A ND 3ph IP20 599Hz","buyUrl":"","quoteUrl":"https://wa.me/5217201185420?text=Hola%2C%20quiero%20solicitar%20una%20cotizaci%C3%B3n%20del%20variador%20Delta%20VFD2A8MS23ANSAA%20de%20la%20familia%20MS300.","buyValidated":false,"frame":"A"},{"family":"MS300","model":"VFD2A8MS23MNSAA","voltage":"230","phase":"3","kw":"0.4","hp":"0.5","enclosure":"IP66 / NEMA 4X","emc":"Sin filtro","current":"","hd":"2.8","nd":"3.2","frequency":"599 Hz","description":"VFD-MS300, IP66/NEMA 4X Standard, 0.4kW","buyUrl":"","quoteUrl":"https://wa.me/5217201185420?text=Hola%2C%20quiero%20solicitar%20una%20cotizaci%C3%B3n%20del%20variador%20Delta%20VFD2A8MS23MNSAA%20de%20la%20familia%20MS300.","buyValidated":false,"frame":"A"},{"family":"MS300","model":"VFD32AMS43ANSAA","voltage":"480","phase":"3","kw":"15","hp":"20","enclosure":"IP20","emc":"Sin filtro","current":"","hd":"32","nd":"36","frequency":"599 Hz","description":"VFD-MS300, 20HP 15kW 480V 32A HD 36A ND 3ph IP20 599Hz","buyUrl":"https://ceitsa.com.mx/p/VFD32AMS43ANSAA","quoteUrl":"","buyValidated":true,"frame":"E"},{"family":"MS300","model":"VFD33AMS23ANSAA","voltage":"230","phase":"3","kw":"7.5","hp":"10","enclosure":"IP20","emc":"Sin filtro","current":"","hd":"33","nd":"36","frequency":"599 Hz","description":"VFD-MS300, 10HP 7.5kW 230V 33A HD 36A ND 3ph IP20 599Hz","buyUrl":"https://ceitsa.com.mx/p/VFD33AMS23ANSAA","quoteUrl":"","buyValidated":true,"frame":"E"},{"family":"MS300","model":"VFD38AMS43ANSAA","voltage":"480","phase":"3","kw":"18.5","hp":"25","enclosure":"IP20","emc":"Sin filtro","current":"","hd":"38","nd":"41.5","frequency":"599 Hz","description":"VFD-MS300, 25HP 18.5kW 480V 38A HD 41.5A ND 3ph IP20 599Hz","buyUrl":"","quoteUrl":"https://wa.me/5217201185420?text=Hola%2C%20quiero%20solicitar%20una%20cotizaci%C3%B3n%20del%20variador%20Delta%20VFD38AMS43ANSAA%20de%20la%20familia%20MS300.","buyValidated":false,"frame":"F"},{"family":"MS300","model":"VFD45AMS43ANSAA","voltage":"480","phase":"3","kw":"22","hp":"30","enclosure":"IP20","emc":"Sin filtro","current":"","hd":"45","nd":"49","frequency":"599 Hz","description":"VFD-MS300, 30HP 22kW 480V 45A HD 49A ND 3ph IP20 599Hz","buyUrl":"https://ceitsa.com.mx/p/VFD45AMS43ANSAA","quoteUrl":"","buyValidated":true,"frame":"F"},{"family":"MS300","model":"VFD49AMS23ANSAA","voltage":"230","phase":"3","kw":"11","hp":"15","enclosure":"IP20","emc":"Sin filtro","current":"","hd":"49","nd":"51","frequency":"599 Hz","description":"VFD-MS300, 15HP 11kW 230V 49A HD 51A ND 3ph IP20 599Hz","buyUrl":"","quoteUrl":"https://wa.me/5217201185420?text=Hola%2C%20quiero%20solicitar%20una%20cotizaci%C3%B3n%20del%20variador%20Delta%20VFD49AMS23ANSAA%20de%20la%20familia%20MS300.","buyValidated":false,"frame":"E"},{"family":"MS300","model":"VFD4A2MS43AFSAA","voltage":"480","phase":"3","kw":"1.5","hp":"2","enclosure":"IP20","emc":"Integrado","current":"","hd":"4.2","nd":"4.6","frequency":"599 Hz","description":"VFD-MS300, 2HP 1.5kW 480V 4.2A HD 4.6A ND 3ph IP20 599Hz EMC Filter","buyUrl":"","quoteUrl":"https://wa.me/5217201185420?text=Hola%2C%20quiero%20solicitar%20una%20cotizaci%C3%B3n%20del%20variador%20Delta%20VFD4A2MS43AFSAA%20de%20la%20familia%20MS300.","buyValidated":false,"frame":"B"},{"family":"MS300","model":"VFD4A2MS43ANSAA","voltage":"480","phase":"3","kw":"1.5","hp":"2","enclosure":"IP20","emc":"Sin filtro","current":"","hd":"4.2","nd":"4.6","frequency":"599 Hz","description":"VFD-MS300, 2HP 1.5kW 480V 4.2A HD 4.6A ND 3ph IP20 599Hz","buyUrl":"https://ceitsa.com.mx/p/VFD4A2MS43ANSAA","quoteUrl":"","buyValidated":true,"frame":"B"},{"family":"MS300","model":"VFD4A2MS43MFSAA","voltage":"480","phase":"3","kw":"1.5","hp":"2","enclosure":"IP66 / NEMA 4X","emc":"Integrado C2","current":"","hd":"4.2","nd":"4.6","frequency":"599 Hz","description":"VFD-MS300, IP66/NEMA 4X/EMI Filter Built-in (C2 Class), 1.5kW","buyUrl":"","quoteUrl":"https://wa.me/5217201185420?text=Hola%2C%20quiero%20solicitar%20una%20cotizaci%C3%B3n%20del%20variador%20Delta%20VFD4A2MS43MFSAA%20de%20la%20familia%20MS300.","buyValidated":false,"frame":"B"},{"family":"MS300","model":"VFD4A2MS43MNSAA","voltage":"480","phase":"3","kw":"1.5","hp":"2","enclosure":"IP66 / NEMA 4X","emc":"Sin filtro","current":"","hd":"4.2","nd":"4.6","frequency":"599 Hz","description":"VFD-MS300, IP66/NEMA 4X Standard, 1.5kW","buyUrl":"","quoteUrl":"https://wa.me/5217201185420?text=Hola%2C%20quiero%20solicitar%20una%20cotizaci%C3%B3n%20del%20variador%20Delta%20VFD4A2MS43MNSAA%20de%20la%20familia%20MS300.","buyValidated":false,"frame":"B"},{"family":"MS300","model":"VFD4A8MS11ANSAA","voltage":"115","phase":"1","kw":"0.75","hp":"1","enclosure":"IP20","emc":"Sin filtro","current":"","hd":"4.8","nd":"5.5","frequency":"599 Hz","description":"VFD-MS300, 1HP 0.75kW 115V 4.8A HD 5.5A ND 1ph IP20 599Hz","buyUrl":"https://ceitsa.com.mx/p/VFD4A8MS11ANSAA","quoteUrl":"","buyValidated":true,"frame":"C"},{"family":"MS300","model":"VFD4A8MS21ANSAA","voltage":"230","phase":"1","kw":"0.75","hp":"1","enclosure":"IP20","emc":"Sin filtro","current":"","hd":"4.8","nd":"5.0","frequency":"599 Hz","description":"VFD-MS300, 1HP 0.75kW 230V 4.8A HD 5.0A ND 1ph IP20 599Hz","buyUrl":"https://ceitsa.com.mx/p/VFD4A8MS21ANSAA","quoteUrl":"","buyValidated":true,"frame":"B"},{"family":"MS300","model":"VFD4A8MS21MFSAA","voltage":"230","phase":"1","kw":"0.75","hp":"1","enclosure":"IP66 / NEMA 4X","emc":"Integrado C2","current":"","hd":"4.8","nd":"5.0","frequency":"599 Hz","description":"VFD-MS300, IP66/NEMA 4X/EMI Filter Built-in (C2 Class), 0.75kW","buyUrl":"","quoteUrl":"https://wa.me/5217201185420?text=Hola%2C%20quiero%20solicitar%20una%20cotizaci%C3%B3n%20del%20variador%20Delta%20VFD4A8MS21MFSAA%20de%20la%20familia%20MS300.","buyValidated":false,"frame":"B"},{"family":"MS300","model":"VFD4A8MS21MNSAA","voltage":"230","phase":"1","kw":"0.75","hp":"1","enclosure":"IP66 / NEMA 4X","emc":"Sin filtro","current":"","hd":"4.8","nd":"5.0","frequency":"599 Hz","description":"VFD-MS300, IP66/NEMA 4X Standard, 0.75kW","buyUrl":"","quoteUrl":"https://wa.me/5217201185420?text=Hola%2C%20quiero%20solicitar%20una%20cotizaci%C3%B3n%20del%20variador%20Delta%20VFD4A8MS21MNSAA%20de%20la%20familia%20MS300.","buyValidated":false,"frame":"B"},{"family":"MS300","model":"VFD4A8MS23ANSAA","voltage":"230","phase":"3","kw":"0.75","hp":"1","enclosure":"IP20","emc":"Sin filtro","current":"","hd":"4.8","nd":"5.0","frequency":"599 Hz","description":"VFD-MS300, 1HP 0.75kW 230V 4.8A HD 5.0A ND 3ph IP20 599Hz","buyUrl":"https://ceitsa.com.mx/p/VFD4A8MS23ANSAA","quoteUrl":"","buyValidated":true,"frame":"A"},{"family":"MS300","model":"VFD4A8MS23MNSAA","voltage":"230","phase":"3","kw":"0.75","hp":"1","enclosure":"IP66 / NEMA 4X","emc":"Sin filtro","current":"","hd":"4.8","nd":"5.0","frequency":"599 Hz","description":"VFD-MS300, IP66/NEMA 4X Standard, 0.75kW","buyUrl":"","quoteUrl":"https://wa.me/5217201185420?text=Hola%2C%20quiero%20solicitar%20una%20cotizaci%C3%B3n%20del%20variador%20Delta%20VFD4A8MS23MNSAA%20de%20la%20familia%20MS300.","buyValidated":false,"frame":"A"},{"family":"MS300","model":"VFD5A5MS43ANSAA","voltage":"480","phase":"3","kw":"2.2","hp":"3","enclosure":"IP20","emc":"Sin filtro","current":"","hd":"5.5","nd":"6.5","frequency":"599 Hz","description":"VFD-MS300, 3HP 2.2kW 480V 5.5A HD 6.5A ND 3ph IP20 599Hz","buyUrl":"https://ceitsa.com.mx/p/VFD5A5MS43ANSAA","quoteUrl":"","buyValidated":true,"frame":"C"},{"family":"MS300","model":"VFD5A5MS43MFSAA","voltage":"480","phase":"3","kw":"2.2","hp":"3","enclosure":"IP66 / NEMA 4X","emc":"Integrado C2","current":"","hd":"5.5","nd":"6.5","frequency":"599 Hz","description":"VFD-MS300, IP66/NEMA 4X/EMI Filter Built-in (C2 Class), 2.2kW","buyUrl":"","quoteUrl":"https://wa.me/5217201185420?text=Hola%2C%20quiero%20solicitar%20una%20cotizaci%C3%B3n%20del%20variador%20Delta%20VFD5A5MS43MFSAA%20de%20la%20familia%20MS300.","buyValidated":false,"frame":"C"},{"family":"MS300","model":"VFD5A5MS43MNSAA","voltage":"480","phase":"3","kw":"2.2","hp":"3","enclosure":"IP66 / NEMA 4X","emc":"Sin filtro","current":"","hd":"5.5","nd":"6.5","frequency":"599 Hz","description":"VFD-MS300, IP66/NEMA 4X Standard, 2.2kW","buyUrl":"","quoteUrl":"https://wa.me/5217201185420?text=Hola%2C%20quiero%20solicitar%20una%20cotizaci%C3%B3n%20del%20variador%20Delta%20VFD5A5MS43MNSAA%20de%20la%20familia%20MS300.","buyValidated":false,"frame":"C"},{"family":"MS300","model":"VFD65AMS23ANSAA","voltage":"230","phase":"3","kw":"15","hp":"20","enclosure":"IP20","emc":"Sin filtro","current":"","hd":"65","nd":"69","frequency":"599 Hz","description":"VFD-MS300, 20HP 15kW 230V 65A HD 69A ND 3ph IP20 599Hz","buyUrl":"","quoteUrl":"https://wa.me/5217201185420?text=Hola%2C%20quiero%20solicitar%20una%20cotizaci%C3%B3n%20del%20variador%20Delta%20VFD65AMS23ANSAA%20de%20la%20familia%20MS300.","buyValidated":false,"frame":"F"},{"family":"MS300","model":"VFD7A5MS21ANSAA","voltage":"230","phase":"1","kw":"1.5","hp":"2","enclosure":"IP20","emc":"Sin filtro","current":"","hd":"7.5","nd":"8.5","frequency":"599 Hz","description":"VFD-MS300, 2HP 1.5kW 230V 7.5A HD 8.5A ND 1ph IP20 599Hz","buyUrl":"https://ceitsa.com.mx/p/VFD7A5MS21ANSAA","quoteUrl":"","buyValidated":true,"frame":"C"},{"family":"MS300","model":"VFD7A5MS21MFSAA","voltage":"230","phase":"1","kw":"1.5","hp":"2","enclosure":"IP66 / NEMA 4X","emc":"Integrado C2","current":"","hd":"7.5","nd":"8.5","frequency":"599 Hz","description":"VFD-MS300, IP66/NEMA 4X/EMI Filter Built-in (C2 Class), 1.5kW","buyUrl":"","quoteUrl":"https://wa.me/5217201185420?text=Hola%2C%20quiero%20solicitar%20una%20cotizaci%C3%B3n%20del%20variador%20Delta%20VFD7A5MS21MFSAA%20de%20la%20familia%20MS300.","buyValidated":false,"frame":"C"},{"family":"MS300","model":"VFD7A5MS21MNSAA","voltage":"230","phase":"1","kw":"1.5","hp":"2","enclosure":"IP66 / NEMA 4X","emc":"Sin filtro","current":"","hd":"7.5","nd":"8.5","frequency":"599 Hz","description":"VFD-MS300, IP66/NEMA 4X Standard, 1.5kW","buyUrl":"","quoteUrl":"https://wa.me/5217201185420?text=Hola%2C%20quiero%20solicitar%20una%20cotizaci%C3%B3n%20del%20variador%20Delta%20VFD7A5MS21MNSAA%20de%20la%20familia%20MS300.","buyValidated":false,"frame":"C"},{"family":"MS300","model":"VFD7A5MS23ANSAA","voltage":"230","phase":"3","kw":"1.5","hp":"2","enclosure":"IP20","emc":"Sin filtro","current":"","hd":"7.5","nd":"8.0","frequency":"599 Hz","description":"VFD-MS300, 2HP 1.5kW 230V 7.5A HD 8.0A ND 3ph IP20 599Hz","buyUrl":"https://ceitsa.com.mx/p/VFD7A5MS23ANSAA","quoteUrl":"","buyValidated":true,"frame":"B"},{"family":"MS300","model":"VFD7A5MS23MNSAA","voltage":"230","phase":"3","kw":"1.5","hp":"2","enclosure":"IP66 / NEMA 4X","emc":"Sin filtro","current":"","hd":"7.5","nd":"8.0","frequency":"599 Hz","description":"VFD-MS300, IP66/NEMA 4X Standard, 1.5kW","buyUrl":"","quoteUrl":"https://wa.me/5217201185420?text=Hola%2C%20quiero%20solicitar%20una%20cotizaci%C3%B3n%20del%20variador%20Delta%20VFD7A5MS23MNSAA%20de%20la%20familia%20MS300.","buyValidated":false,"frame":"B"},{"family":"MS300","model":"VFD9A0MS43ANSAA","voltage":"480","phase":"3","kw":"3.7","hp":"5","enclosure":"IP20","emc":"Sin filtro","current":"","hd":"9.0","nd":"10.5","frequency":"599 Hz","description":"VFD-MS300, 5HP 3.7kW 480V 9.0A HD 10.5A ND 3ph IP20 599Hz","buyUrl":"https://ceitsa.com.mx/p/VFD9A0MS43ANSAA","quoteUrl":"","buyValidated":true,"frame":"C"},{"family":"MS300","model":"VFD9A0MS43MFSAA","voltage":"480","phase":"3","kw":"3.7","hp":"5","enclosure":"IP66 / NEMA 4X","emc":"Integrado C2","current":"","hd":"9.0","nd":"10.5","frequency":"599 Hz","description":"VFD-MS300, IP66/NEMA 4X/EMI Filter Built-in (C2 Class), 3.7kW","buyUrl":"","quoteUrl":"https://wa.me/5217201185420?text=Hola%2C%20quiero%20solicitar%20una%20cotizaci%C3%B3n%20del%20variador%20Delta%20VFD9A0MS43MFSAA%20de%20la%20familia%20MS300.","buyValidated":false,"frame":"C"},{"family":"MS300","model":"VFD9A0MS43MNSAA","voltage":"480","phase":"3","kw":"3.7","hp":"5","enclosure":"IP66 / NEMA 4X","emc":"Sin filtro","current":"","hd":"9.0","nd":"10.5","frequency":"599 Hz","description":"VFD-MS300, IP66/NEMA 4X Standard, 3.7kW","buyUrl":"","quoteUrl":"https://wa.me/5217201185420?text=Hola%2C%20quiero%20solicitar%20una%20cotizaci%C3%B3n%20del%20variador%20Delta%20VFD9A0MS43MNSAA%20de%20la%20familia%20MS300.","buyValidated":false,"frame":"C"},{"family":"C2000+","model":"VFD007C23A-21","voltage":"230","phase":"3","kw":"0.75","hp":"1","enclosure":"No indicado","emc":"Sin filtro indicado","current":"","hd":"","nd":"","frequency":"","description":"VFD-C2000+, 1 HP, 230 V, FOC y control de torque","buyUrl":"","quoteUrl":"https://wa.me/5217201185420?text=Hola%2C%20quiero%20solicitar%20una%20cotizaci%C3%B3n%20del%20variador%20Delta%20VFD007C23A-21%20de%20la%20familia%20C2000%2B.","buyValidated":false,"frame":"A"},{"family":"C2000+","model":"VFD007C43A-21","voltage":"460","phase":"3","kw":"0.75","hp":"1","enclosure":"No indicado","emc":"Sin filtro indicado","current":"","hd":"","nd":"","frequency":"","description":"VFD-C2000+, 1 HP, 460 V, FOC y control de torque","buyUrl":"https://ceitsa.com.mx/p/VFD007C43A-21","quoteUrl":"","buyValidated":true,"frame":"A"},{"family":"C2000+","model":"VFD007C4EA-21","voltage":"460","phase":"3","kw":"0.75","hp":"1","enclosure":"IP20 / NEMA 1","emc":"Filtro EMC integrado","current":"3","hd":"","nd":"","frequency":"","description":"VFD-C2000+, 1 HP, 460 V, FOC y control de torque","buyUrl":"","quoteUrl":"https://wa.me/5217201185420?text=Hola%2C%20quiero%20solicitar%20una%20cotizaci%C3%B3n%20del%20variador%20Delta%20VFD007C4EA-21%20de%20la%20familia%20C2000%2B.","buyValidated":false,"frame":"A"},{"family":"C2000+","model":"VFD015C23A-21","voltage":"230","phase":"3","kw":"1.5","hp":"2","enclosure":"No indicado","emc":"Sin filtro indicado","current":"","hd":"","nd":"","frequency":"","description":"VFD-C2000+, 2 HP, 230 V, FOC y control de torque","buyUrl":"https://ceitsa.com.mx/p/VFD015C23A-21","quoteUrl":"","buyValidated":true,"frame":"A"},{"family":"C2000+","model":"VFD015C43A-21","voltage":"460","phase":"3","kw":"1.5","hp":"2","enclosure":"No indicado","emc":"Sin filtro indicado","current":"","hd":"","nd":"","frequency":"","description":"VFD-C2000+, 2 HP, 460 V, FOC y control de torque","buyUrl":"https://ceitsa.com.mx/p/VFD015C43A-21","quoteUrl":"","buyValidated":true,"frame":"A"},{"family":"C2000+","model":"VFD015C4EA-21","voltage":"460","phase":"3","kw":"1.5","hp":"2","enclosure":"IP20 / NEMA 1","emc":"Filtro EMC integrado","current":"","hd":"","nd":"","frequency":"","description":"VFD-C2000+, 2 HP, 460 V, FOC y control de torque","buyUrl":"","quoteUrl":"https://wa.me/5217201185420?text=Hola%2C%20quiero%20solicitar%20una%20cotizaci%C3%B3n%20del%20variador%20Delta%20VFD015C4EA-21%20de%20la%20familia%20C2000%2B.","buyValidated":false,"frame":"A"},{"family":"C2000+","model":"VFD022C23A-21","voltage":"230","phase":"3","kw":"2.2","hp":"3","enclosure":"No indicado","emc":"Sin filtro indicado","current":"","hd":"","nd":"","frequency":"","description":"VFD-C2000+, 3 HP, 230 V, FOC y control de torque","buyUrl":"https://ceitsa.com.mx/p/VFD022C23A-21","quoteUrl":"","buyValidated":true,"frame":"A"},{"family":"C2000+","model":"VFD022C43A-21","voltage":"460","phase":"3","kw":"2.2","hp":"3","enclosure":"No indicado","emc":"Sin filtro indicado","current":"","hd":"","nd":"","frequency":"","description":"VFD-C2000+, 3 HP, 460 V, FOC y control de torque","buyUrl":"https://ceitsa.com.mx/p/VFD022C43A-21","quoteUrl":"","buyValidated":true,"frame":"A"},{"family":"C2000+","model":"VFD022C4EA-21","voltage":"460","phase":"3","kw":"2.2","hp":"3","enclosure":"IP20 / NEMA 1","emc":"Filtro EMC integrado","current":"6","hd":"","nd":"","frequency":"","description":"VFD-C2000+, 3 HP, 460 V, FOC y control de torque","buyUrl":"","quoteUrl":"https://wa.me/5217201185420?text=Hola%2C%20quiero%20solicitar%20una%20cotizaci%C3%B3n%20del%20variador%20Delta%20VFD022C4EA-21%20de%20la%20familia%20C2000%2B.","buyValidated":false,"frame":"A"},{"family":"C2000+","model":"VFD037C23A-21","voltage":"230","phase":"3","kw":"3.7","hp":"5","enclosure":"No indicado","emc":"Sin filtro indicado","current":"","hd":"","nd":"","frequency":"","description":"VFD-C2000+, 5 HP, 230 V, FOC y control de torque","buyUrl":"https://ceitsa.com.mx/p/VFD037C23A-21","quoteUrl":"","buyValidated":true,"frame":"A"},{"family":"C2000+","model":"VFD037C43A-21","voltage":"460","phase":"3","kw":"3.7","hp":"5","enclosure":"No indicado","emc":"Sin filtro indicado","current":"","hd":"","nd":"","frequency":"","description":"VFD-C2000+, 5 HP, 460 V, FOC y control de torque","buyUrl":"https://ceitsa.com.mx/p/VFD037C43A-21","quoteUrl":"","buyValidated":true,"frame":"A"},{"family":"C2000+","model":"VFD037C4EA-21","voltage":"460","phase":"3","kw":"3.7","hp":"5","enclosure":"IP20 / NEMA 1","emc":"Filtro EMC integrado","current":"9","hd":"","nd":"","frequency":"","description":"VFD-C2000+, 5 HP, 460 V, FOC y control de torque","buyUrl":"","quoteUrl":"https://wa.me/5217201185420?text=Hola%2C%20quiero%20solicitar%20una%20cotizaci%C3%B3n%20del%20variador%20Delta%20VFD037C4EA-21%20de%20la%20familia%20C2000%2B.","buyValidated":false,"frame":"A"},{"family":"C2000+","model":"VFD040C43A-21","voltage":"460","phase":"3","kw":"4","hp":"5.5","enclosure":"IP20 / NEMA 1","emc":"Sin filtro indicado","current":"10.5","hd":"","nd":"","frequency":"","description":"VFD-C2000+, 5.5 HP, 460 V, FOC y control de torque","buyUrl":"https://ceitsa.com.mx/p/VFD040C43A-21","quoteUrl":"","buyValidated":true,"frame":"A"},{"family":"C2000+","model":"VFD040C4EA-21","voltage":"460","phase":"3","kw":"4","hp":"5.5","enclosure":"IP20 / NEMA 1","emc":"Filtro EMC integrado","current":"10.5","hd":"","nd":"","frequency":"","description":"VFD-C2000+, 5.5 HP, 460 V, FOC y control de torque","buyUrl":"","quoteUrl":"https://wa.me/5217201185420?text=Hola%2C%20quiero%20solicitar%20una%20cotizaci%C3%B3n%20del%20variador%20Delta%20VFD040C4EA-21%20de%20la%20familia%20C2000%2B.","buyValidated":false,"frame":"A"},{"family":"C2000+","model":"VFD055C23A-21","voltage":"230","phase":"3","kw":"5.5","hp":"7.5","enclosure":"No indicado","emc":"Sin filtro indicado","current":"","hd":"","nd":"","frequency":"","description":"VFD-C2000+, 7.5 HP, 230 V, FOC y control de torque","buyUrl":"https://ceitsa.com.mx/p/VFD055C23A-21","quoteUrl":"","buyValidated":true,"frame":"B"},{"family":"C2000+","model":"VFD055C43A-21","voltage":"460","phase":"3","kw":"5.5","hp":"7.5","enclosure":"No indicado","emc":"Sin filtro indicado","current":"","hd":"","nd":"","frequency":"","description":"VFD-C2000+, 7.5 HP, 460 V, FOC y control de torque","buyUrl":"","quoteUrl":"https://wa.me/5217201185420?text=Hola%2C%20quiero%20solicitar%20una%20cotizaci%C3%B3n%20del%20variador%20Delta%20VFD055C43A-21%20de%20la%20familia%20C2000%2B.","buyValidated":false,"frame":"A"},{"family":"C2000+","model":"VFD055C4EA-21","voltage":"460","phase":"3","kw":"5.5","hp":"7.5","enclosure":"IP20 / NEMA 1","emc":"Filtro EMC integrado","current":"12","hd":"","nd":"","frequency":"","description":"VFD-C2000+, 7.5 HP, 460 V, FOC y control de torque","buyUrl":"","quoteUrl":"https://wa.me/5217201185420?text=Hola%2C%20quiero%20solicitar%20una%20cotizaci%C3%B3n%20del%20variador%20Delta%20VFD055C4EA-21%20de%20la%20familia%20C2000%2B.","buyValidated":false,"frame":"A"},{"family":"C2000+","model":"VFD075C23A-21","voltage":"230","phase":"3","kw":"7.5","hp":"10","enclosure":"No indicado","emc":"Sin filtro indicado","current":"","hd":"","nd":"","frequency":"","description":"VFD-C2000+, 10 HP, 230 V, FOC y control de torque","buyUrl":"https://ceitsa.com.mx/p/VFD075C23A-21","quoteUrl":"","buyValidated":true,"frame":"B"},{"family":"C2000+","model":"VFD075C43A-21","voltage":"460","phase":"3","kw":"7.5","hp":"10","enclosure":"No indicado","emc":"Sin filtro indicado","current":"","hd":"","nd":"","frequency":"","description":"VFD-C2000+, 10 HP, 460 V, FOC y control de torque","buyUrl":"https://ceitsa.com.mx/p/VFD075C43A-21","quoteUrl":"","buyValidated":true,"frame":"B"},{"family":"C2000+","model":"VFD075C4EA-21","voltage":"460","phase":"3","kw":"7.5","hp":"10","enclosure":"IP20 / NEMA 1","emc":"Filtro EMC integrado","current":"18","hd":"","nd":"","frequency":"","description":"VFD-C2000+, 10 HP, 460 V, FOC y control de torque","buyUrl":"","quoteUrl":"https://wa.me/5217201185420?text=Hola%2C%20quiero%20solicitar%20una%20cotizaci%C3%B3n%20del%20variador%20Delta%20VFD075C4EA-21%20de%20la%20familia%20C2000%2B.","buyValidated":false,"frame":"B"},{"family":"C2000+","model":"VFD1100C43A-21","voltage":"460","phase":"3","kw":"110","hp":"150","enclosure":"No indicado","emc":"Sin filtro indicado","current":"","hd":"","nd":"","frequency":"","description":"VFD-C2000+, 150 HP, 460 V, FOC y control de torque","buyUrl":"","quoteUrl":"https://wa.me/5217201185420?text=Hola%2C%20quiero%20solicitar%20una%20cotizaci%C3%B3n%20del%20variador%20Delta%20VFD1100C43A-21%20de%20la%20familia%20C2000%2B.","buyValidated":false,"frame":"E"},{"family":"C2000+","model":"VFD110C23A-21","voltage":"230","phase":"3","kw":"11","hp":"15","enclosure":"No indicado","emc":"Sin filtro indicado","current":"","hd":"","nd":"","frequency":"","description":"VFD-C2000+, 15 HP, 230 V, FOC y control de torque","buyUrl":"https://ceitsa.com.mx/p/VFD110C23A-21","quoteUrl":"","buyValidated":true,"frame":"B"},{"family":"C2000+","model":"VFD110C43A-21","voltage":"460","phase":"3","kw":"11","hp":"15","enclosure":"No indicado","emc":"Sin filtro indicado","current":"","hd":"","nd":"","frequency":"","description":"VFD-C2000+, 15 HP, 460 V, FOC y control de torque","buyUrl":"","quoteUrl":"https://wa.me/5217201185420?text=Hola%2C%20quiero%20solicitar%20una%20cotizaci%C3%B3n%20del%20variador%20Delta%20VFD110C43A-21%20de%20la%20familia%20C2000%2B.","buyValidated":false,"frame":"B"},{"family":"C2000+","model":"VFD110C4EA-21","voltage":"460","phase":"3","kw":"11","hp":"15","enclosure":"IP20 / NEMA 1","emc":"Filtro EMC integrado","current":"24","hd":"","nd":"","frequency":"","description":"VFD-C2000+, 15 HP, 460 V, FOC y control de torque","buyUrl":"","quoteUrl":"https://wa.me/5217201185420?text=Hola%2C%20quiero%20solicitar%20una%20cotizaci%C3%B3n%20del%20variador%20Delta%20VFD110C4EA-21%20de%20la%20familia%20C2000%2B.","buyValidated":false,"frame":"B"},{"family":"C2000+","model":"VFD1320C43A-21","voltage":"460","phase":"3","kw":"132","hp":"175","enclosure":"No indicado","emc":"Sin filtro indicado","current":"","hd":"","nd":"","frequency":"","description":"VFD-C2000+, 175 HP, 460 V, FOC y control de torque","buyUrl":"","quoteUrl":"https://wa.me/5217201185420?text=Hola%2C%20quiero%20solicitar%20una%20cotizaci%C3%B3n%20del%20variador%20Delta%20VFD1320C43A-21%20de%20la%20familia%20C2000%2B.","buyValidated":false,"frame":"F"},{"family":"C2000+","model":"VFD150C23A-21","voltage":"230","phase":"3","kw":"15","hp":"20","enclosure":"No indicado","emc":"Sin filtro indicado","current":"","hd":"","nd":"","frequency":"","description":"VFD-C2000+, 20 HP, 230 V, FOC y control de torque","buyUrl":"https://ceitsa.com.mx/p/VFD150C23A-21","quoteUrl":"","buyValidated":true,"frame":"C"},{"family":"C2000+","model":"VFD150C43A-21","voltage":"460","phase":"3","kw":"15","hp":"20","enclosure":"No indicado","emc":"Sin filtro indicado","current":"","hd":"","nd":"","frequency":"","description":"VFD-C2000+, 20 HP, 460 V, FOC y control de torque","buyUrl":"https://ceitsa.com.mx/p/VFD150C43A-21","quoteUrl":"","buyValidated":true,"frame":"B"},{"family":"C2000+","model":"VFD150C4EA-21","voltage":"460","phase":"3","kw":"15","hp":"20","enclosure":"IP20 / NEMA 1","emc":"Filtro EMC integrado","current":"32","hd":"","nd":"","frequency":"","description":"VFD-C2000+, 20 HP, 460 V, FOC y control de torque","buyUrl":"","quoteUrl":"https://wa.me/5217201185420?text=Hola%2C%20quiero%20solicitar%20una%20cotizaci%C3%B3n%20del%20variador%20Delta%20VFD150C4EA-21%20de%20la%20familia%20C2000%2B.","buyValidated":false,"frame":"B"},{"family":"C2000+","model":"VFD1600C43A-21","voltage":"460","phase":"3","kw":"160","hp":"215","enclosure":"No indicado","emc":"Sin filtro indicado","current":"","hd":"","nd":"","frequency":"","description":"VFD-C2000+, 215 HP, 460 V, FOC y control de torque","buyUrl":"","quoteUrl":"https://wa.me/5217201185420?text=Hola%2C%20quiero%20solicitar%20una%20cotizaci%C3%B3n%20del%20variador%20Delta%20VFD1600C43A-21%20de%20la%20familia%20C2000%2B.","buyValidated":false,"frame":"F"},{"family":"C2000+","model":"VFD1850C43A-21","voltage":"460","phase":"3","kw":"185","hp":"250","enclosure":"No indicado","emc":"Sin filtro indicado","current":"","hd":"","nd":"","frequency":"","description":"VFD-C2000+, 250 HP, 460 V, FOC y control de torque","buyUrl":"","quoteUrl":"https://wa.me/5217201185420?text=Hola%2C%20quiero%20solicitar%20una%20cotizaci%C3%B3n%20del%20variador%20Delta%20VFD1850C43A-21%20de%20la%20familia%20C2000%2B.","buyValidated":false,"frame":"G"},{"family":"C2000+","model":"VFD185C23A-21","voltage":"230","phase":"3","kw":"18.5","hp":"25","enclosure":"No indicado","emc":"Sin filtro indicado","current":"","hd":"","nd":"","frequency":"","description":"VFD-C2000+, 25 HP, 230 V, FOC y control de torque","buyUrl":"https://ceitsa.com.mx/p/VFD185C23A-21","quoteUrl":"","buyValidated":true,"frame":"C"},{"family":"C2000+","model":"VFD185C43A-21","voltage":"460","phase":"3","kw":"18.5","hp":"25","enclosure":"No indicado","emc":"Sin filtro indicado","current":"","hd":"","nd":"","frequency":"","description":"VFD-C2000+, 25 HP, 460 V, FOC y control de torque","buyUrl":"","quoteUrl":"https://wa.me/5217201185420?text=Hola%2C%20quiero%20solicitar%20una%20cotizaci%C3%B3n%20del%20variador%20Delta%20VFD185C43A-21%20de%20la%20familia%20C2000%2B.","buyValidated":false,"frame":"C"},{"family":"C2000+","model":"VFD185C4EA-21","voltage":"460","phase":"3","kw":"18.5","hp":"25","enclosure":"IP20 / NEMA 1","emc":"Filtro EMC integrado","current":"38","hd":"","nd":"","frequency":"","description":"VFD-C2000+, 25 HP, 460 V, FOC y control de torque","buyUrl":"","quoteUrl":"https://wa.me/5217201185420?text=Hola%2C%20quiero%20solicitar%20una%20cotizaci%C3%B3n%20del%20variador%20Delta%20VFD185C4EA-21%20de%20la%20familia%20C2000%2B.","buyValidated":false,"frame":"C"},{"family":"C2000+","model":"VFD2000C43A-21","voltage":"460","phase":"3","kw":"200","hp":"270","enclosure":"No indicado","emc":"Sin filtro indicado","current":"","hd":"","nd":"","frequency":"","description":"VFD-C2000+, 270 HP, 460 V, FOC y control de torque","buyUrl":"","quoteUrl":"https://wa.me/5217201185420?text=Hola%2C%20quiero%20solicitar%20una%20cotizaci%C3%B3n%20del%20variador%20Delta%20VFD2000C43A-21%20de%20la%20familia%20C2000%2B.","buyValidated":false,"frame":"G"},{"family":"C2000+","model":"VFD2200C43A-21","voltage":"460","phase":"3","kw":"220","hp":"300","enclosure":"No indicado","emc":"Sin filtro indicado","current":"","hd":"","nd":"","frequency":"","description":"VFD-C2000+, 300 HP, 460 V, FOC y control de torque","buyUrl":"","quoteUrl":"https://wa.me/5217201185420?text=Hola%2C%20quiero%20solicitar%20una%20cotizaci%C3%B3n%20del%20variador%20Delta%20VFD2200C43A-21%20de%20la%20familia%20C2000%2B.","buyValidated":false,"frame":"G"},{"family":"C2000+","model":"VFD220C23A-21","voltage":"230","phase":"3","kw":"22","hp":"30","enclosure":"No indicado","emc":"Sin filtro indicado","current":"","hd":"","nd":"","frequency":"","description":"VFD-C2000+, 30 HP, 230 V, FOC y control de torque","buyUrl":"","quoteUrl":"https://wa.me/5217201185420?text=Hola%2C%20quiero%20solicitar%20una%20cotizaci%C3%B3n%20del%20variador%20Delta%20VFD220C23A-21%20de%20la%20familia%20C2000%2B.","buyValidated":false,"frame":"C"},{"family":"C2000+","model":"VFD220C43A-21","voltage":"460","phase":"3","kw":"22","hp":"30","enclosure":"No indicado","emc":"Sin filtro indicado","current":"","hd":"","nd":"","frequency":"","description":"VFD-C2000+, 30 HP, 460 V, FOC y control de torque","buyUrl":"https://ceitsa.com.mx/p/VFD220C43A-21","quoteUrl":"","buyValidated":true,"frame":"C"},{"family":"C2000+","model":"VFD220C4EA-21","voltage":"460","phase":"3","kw":"22","hp":"30","enclosure":"IP20 / NEMA 1","emc":"Filtro EMC integrado","current":"45","hd":"","nd":"","frequency":"","description":"VFD-C2000+, 30 HP, 460 V, FOC y control de torque","buyUrl":"","quoteUrl":"https://wa.me/5217201185420?text=Hola%2C%20quiero%20solicitar%20una%20cotizaci%C3%B3n%20del%20variador%20Delta%20VFD220C4EA-21%20de%20la%20familia%20C2000%2B.","buyValidated":false,"frame":"C"},{"family":"C2000+","model":"VFD2500C43A-21","voltage":"460","phase":"3","kw":"250","hp":"335","enclosure":"No indicado","emc":"Sin filtro indicado","current":"","hd":"","nd":"","frequency":"","description":"VFD-C2000+, 335 HP, 460 V, FOC y control de torque","buyUrl":"","quoteUrl":"https://wa.me/5217201185420?text=Hola%2C%20quiero%20solicitar%20una%20cotizaci%C3%B3n%20del%20variador%20Delta%20VFD2500C43A-21%20de%20la%20familia%20C2000%2B.","buyValidated":false,"frame":"G"},{"family":"C2000+","model":"VFD2800C43C-21","voltage":"460","phase":"3","kw":"280","hp":"375","enclosure":"IP20 / NEMA 1","emc":"Sin filtro indicado","current":"550","hd":"","nd":"","frequency":"","description":"VFD-C2000+, 375 HP, 460 V, FOC y control de torque","buyUrl":"","quoteUrl":"https://wa.me/5217201185420?text=Hola%2C%20quiero%20solicitar%20una%20cotizaci%C3%B3n%20del%20variador%20Delta%20VFD2800C43C-21%20de%20la%20familia%20C2000%2B.","buyValidated":false,"frame":"H"},{"family":"C2000+","model":"VFD300C23A-21","voltage":"230","phase":"3","kw":"30","hp":"40","enclosure":"No indicado","emc":"Sin filtro indicado","current":"","hd":"","nd":"","frequency":"","description":"VFD-C2000+, 40 HP, 230 V, FOC y control de torque","buyUrl":"https://ceitsa.com.mx/p/VFD300C23A-21","quoteUrl":"","buyValidated":true,"frame":"D"},{"family":"C2000+","model":"VFD300C43A-21","voltage":"460","phase":"3","kw":"30","hp":"40","enclosure":"No indicado","emc":"Sin filtro indicado","current":"","hd":"","nd":"","frequency":"","description":"VFD-C2000+, 40 HP, 460 V, FOC y control de torque","buyUrl":"https://ceitsa.com.mx/p/VFD300C43A-21","quoteUrl":"","buyValidated":true,"frame":"C"},{"family":"C2000+","model":"VFD300C4EA-21","voltage":"460","phase":"3","kw":"30","hp":"40","enclosure":"IP20 / NEMA 1","emc":"Filtro EMC integrado","current":"60","hd":"","nd":"","frequency":"","description":"VFD-C2000+, 40 HP, 460 V, FOC y control de torque","buyUrl":"","quoteUrl":"https://wa.me/5217201185420?text=Hola%2C%20quiero%20solicitar%20una%20cotizaci%C3%B3n%20del%20variador%20Delta%20VFD300C4EA-21%20de%20la%20familia%20C2000%2B.","buyValidated":false,"frame":"C"},{"family":"C2000+","model":"VFD3150C43C-21","voltage":"460","phase":"3","kw":"315","hp":"425","enclosure":"IP20 / NEMA 1","emc":"Sin filtro indicado","current":"616","hd":"","nd":"","frequency":"","description":"VFD-C2000+, 425 HP, 460 V, FOC y control de torque","buyUrl":"","quoteUrl":"https://wa.me/5217201185420?text=Hola%2C%20quiero%20solicitar%20una%20cotizaci%C3%B3n%20del%20variador%20Delta%20VFD3150C43C-21%20de%20la%20familia%20C2000%2B.","buyValidated":false,"frame":"H"},{"family":"C2000+","model":"VFD3550C43C-21","voltage":"460","phase":"3","kw":"355","hp":"475","enclosure":"IP20 / NEMA 1","emc":"Sin filtro indicado","current":"683","hd":"","nd":"","frequency":"","description":"VFD-C2000+, 475 HP, 460 V, FOC y control de torque","buyUrl":"","quoteUrl":"https://wa.me/5217201185420?text=Hola%2C%20quiero%20solicitar%20una%20cotizaci%C3%B3n%20del%20variador%20Delta%20VFD3550C43C-21%20de%20la%20familia%20C2000%2B.","buyValidated":false,"frame":"H"},{"family":"C2000+","model":"VFD370C23A-21","voltage":"230","phase":"3","kw":"37","hp":"50","enclosure":"No indicado","emc":"Sin filtro indicado","current":"","hd":"","nd":"","frequency":"","description":"VFD-C2000+, 50 HP, 230 V, FOC y control de torque","buyUrl":"https://ceitsa.com.mx/p/VFD370C23A-21","quoteUrl":"","buyValidated":true,"frame":"D"},{"family":"C2000+","model":"VFD370C43S-21","voltage":"460","phase":"3","kw":"37","hp":"50","enclosure":"IP20 / NEMA 1","emc":"Sin filtro indicado","current":"73","hd":"","nd":"","frequency":"","description":"VFD-C2000+, 50 HP, 460 V, FOC y control de torque","buyUrl":"","quoteUrl":"https://wa.me/5217201185420?text=Hola%2C%20quiero%20solicitar%20una%20cotizaci%C3%B3n%20del%20variador%20Delta%20VFD370C43S-21%20de%20la%20familia%20C2000%2B.","buyValidated":false,"frame":"D0"},{"family":"C2000+","model":"VFD4000C43C-21","voltage":"460","phase":"3","kw":"400","hp":"530","enclosure":"IP20 / NEMA 1","emc":"Sin filtro indicado","current":"770","hd":"","nd":"","frequency":"","description":"VFD-C2000+, 530 HP, 460 V, FOC y control de torque","buyUrl":"","quoteUrl":"https://wa.me/5217201185420?text=Hola%2C%20quiero%20solicitar%20una%20cotizaci%C3%B3n%20del%20variador%20Delta%20VFD4000C43C-21%20de%20la%20familia%20C2000%2B.","buyValidated":false,"frame":"H"},{"family":"C2000+","model":"VFD4500C43C-21","voltage":"460","phase":"3","kw":"450","hp":"600","enclosure":"IP20 / NEMA 1","emc":"Sin filtro indicado","current":"866","hd":"","nd":"","frequency":"","description":"VFD-C2000+, 600 HP, 460 V, FOC y control de torque","buyUrl":"","quoteUrl":"https://wa.me/5217201185420?text=Hola%2C%20quiero%20solicitar%20una%20cotizaci%C3%B3n%20del%20variador%20Delta%20VFD4500C43C-21%20de%20la%20familia%20C2000%2B.","buyValidated":false,"frame":"H"},{"family":"C2000+","model":"VFD450C23A-21","voltage":"230","phase":"3","kw":"45","hp":"60","enclosure":"No indicado","emc":"Sin filtro indicado","current":"","hd":"","nd":"","frequency":"","description":"VFD-C2000+, 60 HP, 230 V, FOC y control de torque","buyUrl":"","quoteUrl":"https://wa.me/5217201185420?text=Hola%2C%20quiero%20solicitar%20una%20cotizaci%C3%B3n%20del%20variador%20Delta%20VFD450C23A-21%20de%20la%20familia%20C2000%2B.","buyValidated":false,"frame":"E"},{"family":"C2000+","model":"VFD450C43S-21","voltage":"460","phase":"3","kw":"45","hp":"60","enclosure":"IP20 / NEMA 1","emc":"Sin filtro indicado","current":"91","hd":"","nd":"","frequency":"","description":"VFD-C2000+, 60 HP, 460 V, FOC y control de torque","buyUrl":"https://ceitsa.com.mx/p/VFD450C43S-21","quoteUrl":"","buyValidated":true,"frame":"D0"},{"family":"C2000+","model":"VFD5000C43C-21","voltage":"460","phase":"3","kw":"500","hp":"670","enclosure":"IP20 / NEMA 1","emc":"Sin filtro indicado","current":"930","hd":"","nd":"","frequency":"","description":"VFD-C2000+, 670 HP, 460 V, FOC y control de torque","buyUrl":"","quoteUrl":"https://wa.me/5217201185420?text=Hola%2C%20quiero%20solicitar%20una%20cotizaci%C3%B3n%20del%20variador%20Delta%20VFD5000C43C-21%20de%20la%20familia%20C2000%2B.","buyValidated":false,"frame":"H"},{"family":"C2000+","model":"VFD550C23A-21","voltage":"230","phase":"3","kw":"55","hp":"75","enclosure":"No indicado","emc":"Sin filtro indicado","current":"","hd":"","nd":"","frequency":"","description":"VFD-C2000+, 75 HP, 230 V, FOC y control de torque","buyUrl":"","quoteUrl":"https://wa.me/5217201185420?text=Hola%2C%20quiero%20solicitar%20una%20cotizaci%C3%B3n%20del%20variador%20Delta%20VFD550C23A-21%20de%20la%20familia%20C2000%2B.","buyValidated":false,"frame":"E"},{"family":"C2000+","model":"VFD550C43A-21","voltage":"460","phase":"3","kw":"55","hp":"75","enclosure":"No indicado","emc":"Sin filtro indicado","current":"","hd":"","nd":"","frequency":"","description":"VFD-C2000+, 75 HP, 460 V, FOC y control de torque","buyUrl":"https://ceitsa.com.mx/p/VFD550C43A-21","quoteUrl":"","buyValidated":true,"frame":"D"},{"family":"C2000+","model":"VFD5600C43C-21","voltage":"460","phase":"3","kw":"560","hp":"750","enclosure":"IP20 / NEMA 1","emc":"Sin filtro indicado","current":"866","hd":"","nd":"","frequency":"","description":"VFD-C2000+, 750 HP, 460 V, FOC y control de torque","buyUrl":"","quoteUrl":"https://wa.me/5217201185420?text=Hola%2C%20quiero%20solicitar%20una%20cotizaci%C3%B3n%20del%20variador%20Delta%20VFD5600C43C-21%20de%20la%20familia%20C2000%2B.","buyValidated":false,"frame":"H"},{"family":"C2000+","model":"VFD750C23A-21","voltage":"230","phase":"3","kw":"75","hp":"100","enclosure":"No indicado","emc":"Sin filtro indicado","current":"","hd":"","nd":"","frequency":"","description":"VFD-C2000+, 100 HP, 230 V, FOC y control de torque","buyUrl":"","quoteUrl":"https://wa.me/5217201185420?text=Hola%2C%20quiero%20solicitar%20una%20cotizaci%C3%B3n%20del%20variador%20Delta%20VFD750C23A-21%20de%20la%20familia%20C2000%2B.","buyValidated":false,"frame":"E"},{"family":"C2000+","model":"VFD750C43A-21","voltage":"460","phase":"3","kw":"75","hp":"100","enclosure":"No indicado","emc":"Sin filtro indicado","current":"","hd":"","nd":"","frequency":"","description":"VFD-C2000+, 100 HP, 460 V, FOC y control de torque","buyUrl":"","quoteUrl":"https://wa.me/5217201185420?text=Hola%2C%20quiero%20solicitar%20una%20cotizaci%C3%B3n%20del%20variador%20Delta%20VFD750C43A-21%20de%20la%20familia%20C2000%2B.","buyValidated":false,"frame":"D"},{"family":"C2000+","model":"VFD900C23A-21","voltage":"230","phase":"3","kw":"90","hp":"125","enclosure":"No indicado","emc":"Sin filtro indicado","current":"","hd":"","nd":"","frequency":"","description":"VFD-C2000+, 125 HP, 230 V, FOC y control de torque","buyUrl":"","quoteUrl":"https://wa.me/5217201185420?text=Hola%2C%20quiero%20solicitar%20una%20cotizaci%C3%B3n%20del%20variador%20Delta%20VFD900C23A-21%20de%20la%20familia%20C2000%2B.","buyValidated":false,"frame":"F"},{"family":"C2000+","model":"VFD900C43A-21","voltage":"460","phase":"3","kw":"90","hp":"125","enclosure":"No indicado","emc":"Sin filtro indicado","current":"","hd":"","nd":"","frequency":"","description":"VFD-C2000+, 125 HP, 460 V, FOC y control de torque","buyUrl":"","quoteUrl":"https://wa.me/5217201185420?text=Hola%2C%20quiero%20solicitar%20una%20cotizaci%C3%B3n%20del%20variador%20Delta%20VFD900C43A-21%20de%20la%20familia%20C2000%2B.","buyValidated":false,"frame":"E"},{"family":"CP2000","model":"VFD007CP23A-21","voltage":"230","phase":"3","kw":"0.75","hp":"1","enclosure":"Montaje en pared · IP20","emc":"Sin filtro indicado","current":"","hd":"","nd":"","frequency":"","description":"VFD-CP2000, 1 HP, 0.75 kW, 230 V, 3 fases, montaje en pared, IP20","buyUrl":"","quoteUrl":"https://wa.me/5217201185420?text=Hola%2C%20quiero%20solicitar%20una%20cotizaci%C3%B3n%20del%20variador%20Delta%20VFD007CP23A-21%20de%20la%20familia%20CP2000.","buyValidated":false,"frame":"A"},{"family":"CP2000","model":"VFD015CP23A-21","voltage":"230","phase":"3","kw":"1.5","hp":"2","enclosure":"Montaje en pared · IP20","emc":"Sin filtro indicado","current":"","hd":"","nd":"","frequency":"","description":"VFD-CP2000, 2 HP, 1.5 kW, 230 V, 3 fases, montaje en pared, IP20","buyUrl":"","quoteUrl":"https://wa.me/5217201185420?text=Hola%2C%20quiero%20solicitar%20una%20cotizaci%C3%B3n%20del%20variador%20Delta%20VFD015CP23A-21%20de%20la%20familia%20CP2000.","buyValidated":false,"frame":"A"},{"family":"CP2000","model":"VFD015CP4EA-21","voltage":"460","phase":"3","kw":"1.5","hp":"2","enclosure":"Montaje en pared · IP20","emc":"Filtro EMI integrado","current":"","hd":"","nd":"","frequency":"","description":"VFD-CP2000, 2 HP, 1.5 kW, 460 V, 3 fases, montaje en pared, IP20","buyUrl":"","quoteUrl":"https://wa.me/5217201185420?text=Hola%2C%20quiero%20solicitar%20una%20cotizaci%C3%B3n%20del%20variador%20Delta%20VFD015CP4EA-21%20de%20la%20familia%20CP2000.","buyValidated":false,"frame":"A"},{"family":"CP2000","model":"VFD022CP23A-21","voltage":"230","phase":"3","kw":"2.2","hp":"3","enclosure":"Montaje en pared · IP20","emc":"Sin filtro indicado","current":"","hd":"","nd":"","frequency":"","description":"VFD-CP2000, 3 HP, 2.2 kW, 230 V, 3 fases, montaje en pared, IP20","buyUrl":"","quoteUrl":"https://wa.me/5217201185420?text=Hola%2C%20quiero%20solicitar%20una%20cotizaci%C3%B3n%20del%20variador%20Delta%20VFD022CP23A-21%20de%20la%20familia%20CP2000.","buyValidated":false,"frame":"A"},{"family":"CP2000","model":"VFD022CP4EA-21","voltage":"460","phase":"3","kw":"2.2","hp":"3","enclosure":"Montaje en pared · IP20","emc":"Filtro EMI integrado","current":"","hd":"","nd":"","frequency":"","description":"VFD-CP2000, 3 HP, 2.2 kW, 460 V, 3 fases, montaje en pared, IP20","buyUrl":"","quoteUrl":"https://wa.me/5217201185420?text=Hola%2C%20quiero%20solicitar%20una%20cotizaci%C3%B3n%20del%20variador%20Delta%20VFD022CP4EA-21%20de%20la%20familia%20CP2000.","buyValidated":false,"frame":"A"},{"family":"CP2000","model":"VFD037CP23A-21","voltage":"230","phase":"3","kw":"3.7","hp":"5","enclosure":"Montaje en pared · IP20","emc":"Sin filtro indicado","current":"","hd":"","nd":"","frequency":"","description":"VFD-CP2000, 5 HP, 3.7 kW, 230 V, 3 fases, montaje en pared, IP20","buyUrl":"","quoteUrl":"https://wa.me/5217201185420?text=Hola%2C%20quiero%20solicitar%20una%20cotizaci%C3%B3n%20del%20variador%20Delta%20VFD037CP23A-21%20de%20la%20familia%20CP2000.","buyValidated":false,"frame":"A"},{"family":"CP2000","model":"VFD037CP4EA-21","voltage":"460","phase":"3","kw":"3.7","hp":"5","enclosure":"Montaje en pared · IP20","emc":"Filtro EMI integrado","current":"","hd":"","nd":"","frequency":"","description":"VFD-CP2000, 5 HP, 3.7 kW, 460 V, 3 fases, montaje en pared, IP20","buyUrl":"","quoteUrl":"https://wa.me/5217201185420?text=Hola%2C%20quiero%20solicitar%20una%20cotizaci%C3%B3n%20del%20variador%20Delta%20VFD037CP4EA-21%20de%20la%20familia%20CP2000.","buyValidated":false,"frame":"A"},{"family":"CP2000","model":"VFD055CP23A-21","voltage":"230","phase":"3","kw":"5.5","hp":"7.5","enclosure":"Montaje en pared · IP20","emc":"Sin filtro indicado","current":"","hd":"","nd":"","frequency":"","description":"VFD-CP2000, 7.5 HP, 5.5 kW, 230 V, 3 fases, montaje en pared, IP20","buyUrl":"","quoteUrl":"https://wa.me/5217201185420?text=Hola%2C%20quiero%20solicitar%20una%20cotizaci%C3%B3n%20del%20variador%20Delta%20VFD055CP23A-21%20de%20la%20familia%20CP2000.","buyValidated":false,"frame":"A"},{"family":"CP2000","model":"VFD055CP4EA-21","voltage":"460","phase":"3","kw":"5.5","hp":"7.5","enclosure":"Montaje en pared · IP20","emc":"Filtro EMI integrado","current":"","hd":"","nd":"","frequency":"","description":"VFD-CP2000, 7.5 HP, 5.5 kW, 460 V, 3 fases, montaje en pared, IP20","buyUrl":"","quoteUrl":"https://wa.me/5217201185420?text=Hola%2C%20quiero%20solicitar%20una%20cotizaci%C3%B3n%20del%20variador%20Delta%20VFD055CP4EA-21%20de%20la%20familia%20CP2000.","buyValidated":false,"frame":"A"},{"family":"CP2000","model":"VFD075CP23A-21","voltage":"230","phase":"3","kw":"7.5","hp":"10","enclosure":"Montaje en pared · IP20","emc":"Sin filtro indicado","current":"","hd":"","nd":"","frequency":"","description":"VFD-CP2000, 10 HP, 7.5 kW, 230 V, 3 fases, montaje en pared, IP20","buyUrl":"","quoteUrl":"https://wa.me/5217201185420?text=Hola%2C%20quiero%20solicitar%20una%20cotizaci%C3%B3n%20del%20variador%20Delta%20VFD075CP23A-21%20de%20la%20familia%20CP2000.","buyValidated":false,"frame":"B"},{"family":"CP2000","model":"VFD075CP4EA-21","voltage":"460","phase":"3","kw":"7.5","hp":"10","enclosure":"Montaje en pared · IP20","emc":"Filtro EMI integrado","current":"","hd":"","nd":"","frequency":"","description":"VFD-CP2000, 10 HP, 7.5 kW, 460 V, 3 fases, montaje en pared, IP20","buyUrl":"","quoteUrl":"https://wa.me/5217201185420?text=Hola%2C%20quiero%20solicitar%20una%20cotizaci%C3%B3n%20del%20variador%20Delta%20VFD075CP4EA-21%20de%20la%20familia%20CP2000.","buyValidated":false,"frame":"A"},{"family":"CP2000","model":"VFD110CP23A-21","voltage":"230","phase":"3","kw":"11","hp":"15","enclosure":"Montaje en pared · IP20","emc":"Sin filtro indicado","current":"","hd":"","nd":"","frequency":"","description":"VFD-CP2000, 15 HP, 11 kW, 230 V, 3 fases, montaje en pared, IP20","buyUrl":"","quoteUrl":"https://wa.me/5217201185420?text=Hola%2C%20quiero%20solicitar%20una%20cotizaci%C3%B3n%20del%20variador%20Delta%20VFD110CP23A-21%20de%20la%20familia%20CP2000.","buyValidated":false,"frame":"B"},{"family":"CP2000","model":"VFD110CP4EA-21","voltage":"460","phase":"3","kw":"11","hp":"15","enclosure":"Montaje en pared · IP20","emc":"Filtro EMI integrado","current":"","hd":"","nd":"","frequency":"","description":"VFD-CP2000, 15 HP, 11 kW, 460 V, 3 fases, montaje en pared, IP20","buyUrl":"","quoteUrl":"https://wa.me/5217201185420?text=Hola%2C%20quiero%20solicitar%20una%20cotizaci%C3%B3n%20del%20variador%20Delta%20VFD110CP4EA-21%20de%20la%20familia%20CP2000.","buyValidated":false,"frame":"B"},{"family":"CP2000","model":"VFD150CP23A-21","voltage":"230","phase":"3","kw":"15","hp":"20","enclosure":"Montaje en pared · IP20","emc":"Sin filtro indicado","current":"","hd":"","nd":"","frequency":"","description":"VFD-CP2000, 20 HP, 15 kW, 230 V, 3 fases, montaje en pared, IP20","buyUrl":"","quoteUrl":"https://wa.me/5217201185420?text=Hola%2C%20quiero%20solicitar%20una%20cotizaci%C3%B3n%20del%20variador%20Delta%20VFD150CP23A-21%20de%20la%20familia%20CP2000.","buyValidated":false,"frame":"B"},{"family":"CP2000","model":"VFD150CP4EA-21","voltage":"460","phase":"3","kw":"15","hp":"20","enclosure":"Montaje en pared · IP20","emc":"Filtro EMI integrado","current":"","hd":"","nd":"","frequency":"","description":"VFD-CP2000, 20 HP, 15 kW, 460 V, 3 fases, montaje en pared, IP20","buyUrl":"","quoteUrl":"https://wa.me/5217201185420?text=Hola%2C%20quiero%20solicitar%20una%20cotizaci%C3%B3n%20del%20variador%20Delta%20VFD150CP4EA-21%20de%20la%20familia%20CP2000.","buyValidated":false,"frame":"B"},{"family":"CP2000","model":"VFD185CP23A-21","voltage":"230","phase":"3","kw":"18.5","hp":"25","enclosure":"Montaje en pared · IP20","emc":"Sin filtro indicado","current":"","hd":"","nd":"","frequency":"","description":"VFD-CP2000, 25 HP, 18.5 kW, 230 V, 3 fases, montaje en pared, IP20","buyUrl":"","quoteUrl":"https://wa.me/5217201185420?text=Hola%2C%20quiero%20solicitar%20una%20cotizaci%C3%B3n%20del%20variador%20Delta%20VFD185CP23A-21%20de%20la%20familia%20CP2000.","buyValidated":false,"frame":"C"},{"family":"CP2000","model":"VFD185CP4EA-21","voltage":"460","phase":"3","kw":"18.5","hp":"25","enclosure":"Montaje en pared · IP20","emc":"Filtro EMI integrado","current":"","hd":"","nd":"","frequency":"","description":"VFD-CP2000, 25 HP, 18.5 kW, 460 V, 3 fases, montaje en pared, IP20","buyUrl":"","quoteUrl":"https://wa.me/5217201185420?text=Hola%2C%20quiero%20solicitar%20una%20cotizaci%C3%B3n%20del%20variador%20Delta%20VFD185CP4EA-21%20de%20la%20familia%20CP2000.","buyValidated":false,"frame":"B"},{"family":"CP2000","model":"VFD220CP23A-21","voltage":"230","phase":"3","kw":"22","hp":"30","enclosure":"Montaje en pared · IP20","emc":"Sin filtro indicado","current":"","hd":"","nd":"","frequency":"","description":"VFD-CP2000, 30 HP, 22 kW, 230 V, 3 fases, montaje en pared, IP20","buyUrl":"","quoteUrl":"https://wa.me/5217201185420?text=Hola%2C%20quiero%20solicitar%20una%20cotizaci%C3%B3n%20del%20variador%20Delta%20VFD220CP23A-21%20de%20la%20familia%20CP2000.","buyValidated":false,"frame":"C"},{"family":"CP2000","model":"VFD300CP23A-21","voltage":"230","phase":"3","kw":"30","hp":"40","enclosure":"Montaje en pared · IP20","emc":"Sin filtro indicado","current":"","hd":"","nd":"","frequency":"","description":"VFD-CP2000, 40 HP, 30 kW, 230 V, 3 fases, montaje en pared, IP20","buyUrl":"","quoteUrl":"https://wa.me/5217201185420?text=Hola%2C%20quiero%20solicitar%20una%20cotizaci%C3%B3n%20del%20variador%20Delta%20VFD300CP23A-21%20de%20la%20familia%20CP2000.","buyValidated":false,"frame":"C"},{"family":"CP2000","model":"VFD300CP4EA-21","voltage":"460","phase":"3","kw":"30","hp":"40","enclosure":"Montaje en pared · IP20","emc":"Filtro EMI integrado","current":"","hd":"","nd":"","frequency":"","description":"VFD-CP2000, 40 HP, 30 kW, 460 V, 3 fases, montaje en pared, IP20","buyUrl":"","quoteUrl":"https://wa.me/5217201185420?text=Hola%2C%20quiero%20solicitar%20una%20cotizaci%C3%B3n%20del%20variador%20Delta%20VFD300CP4EA-21%20de%20la%20familia%20CP2000.","buyValidated":false,"frame":"C"},{"family":"CP2000","model":"VFD370CP23A-21","voltage":"230","phase":"3","kw":"37","hp":"50","enclosure":"Montaje en pared · IP20","emc":"Sin filtro indicado","current":"","hd":"","nd":"","frequency":"","description":"VFD-CP2000, 50 HP, 37 kW, 230 V, 3 fases, montaje en pared, IP20","buyUrl":"","quoteUrl":"https://wa.me/5217201185420?text=Hola%2C%20quiero%20solicitar%20una%20cotizaci%C3%B3n%20del%20variador%20Delta%20VFD370CP23A-21%20de%20la%20familia%20CP2000.","buyValidated":false,"frame":"D"},{"family":"CP2000","model":"VFD370CP4EA-21","voltage":"460","phase":"3","kw":"37","hp":"50","enclosure":"Montaje en pared · IP20","emc":"Filtro EMI integrado","current":"","hd":"","nd":"","frequency":"","description":"VFD-CP2000, 50 HP, 37 kW, 460 V, 3 fases, montaje en pared, IP20","buyUrl":"","quoteUrl":"https://wa.me/5217201185420?text=Hola%2C%20quiero%20solicitar%20una%20cotizaci%C3%B3n%20del%20variador%20Delta%20VFD370CP4EA-21%20de%20la%20familia%20CP2000.","buyValidated":false,"frame":"C"},{"family":"CP2000","model":"VFD450CP23A-21","voltage":"230","phase":"3","kw":"45","hp":"60","enclosure":"Montaje en pared · IP20","emc":"Sin filtro indicado","current":"","hd":"","nd":"","frequency":"","description":"VFD-CP2000, 60 HP, 45 kW, 230 V, 3 fases, montaje en pared, IP20","buyUrl":"","quoteUrl":"https://wa.me/5217201185420?text=Hola%2C%20quiero%20solicitar%20una%20cotizaci%C3%B3n%20del%20variador%20Delta%20VFD450CP23A-21%20de%20la%20familia%20CP2000.","buyValidated":false,"frame":"D"},{"family":"CP2000","model":"VFD550CP23A-21","voltage":"230","phase":"3","kw":"55","hp":"75","enclosure":"Montaje en pared · IP20","emc":"Sin filtro indicado","current":"","hd":"","nd":"","frequency":"","description":"VFD-CP2000, 75 HP, 55 kW, 230 V, 3 fases, montaje en pared, IP20","buyUrl":"","quoteUrl":"https://wa.me/5217201185420?text=Hola%2C%20quiero%20solicitar%20una%20cotizaci%C3%B3n%20del%20variador%20Delta%20VFD550CP23A-21%20de%20la%20familia%20CP2000.","buyValidated":false,"frame":"E"},{"family":"CP2000","model":"VFD750CP23A-21","voltage":"230","phase":"3","kw":"75","hp":"100","enclosure":"Montaje en pared · IP20","emc":"Sin filtro indicado","current":"","hd":"","nd":"","frequency":"","description":"VFD-CP2000, 100 HP, 75 kW, 230 V, 3 fases, montaje en pared, IP20","buyUrl":"","quoteUrl":"https://wa.me/5217201185420?text=Hola%2C%20quiero%20solicitar%20una%20cotizaci%C3%B3n%20del%20variador%20Delta%20VFD750CP23A-21%20de%20la%20familia%20CP2000.","buyValidated":false,"frame":"E"},{"family":"CP2000","model":"VFD900CP23A-21","voltage":"230","phase":"3","kw":"90","hp":"125","enclosure":"Montaje en pared · IP20","emc":"Sin filtro indicado","current":"","hd":"","nd":"","frequency":"","description":"VFD-CP2000, 125 HP, 90 kW, 230 V, 3 fases, montaje en pared, IP20","buyUrl":"","quoteUrl":"https://wa.me/5217201185420?text=Hola%2C%20quiero%20solicitar%20una%20cotizaci%C3%B3n%20del%20variador%20Delta%20VFD900CP23A-21%20de%20la%20familia%20CP2000.","buyValidated":false,"frame":"E"}];
const accessories=[{"model":"CMC-DN01","series":["C2000+","CP2000"],"type":"Tarjeta de comunicación","description":"Tarjeta de comunicación DeviceNet para las familias VFD-C y CP.","protocol":"DeviceNet","frame":[],"powerW":"","resistanceOhm":"","status":"Vigente","validation":"Compatibilidad por familia"},{"model":"CMC-EIP01","series":["C2000+"],"type":"Tarjeta de comunicación","description":"Tarjeta de comunicación EtherNet/IP para la familia C2000.","protocol":"EtherNet/IP","frame":[],"powerW":"","resistanceOhm":"","status":"Vigente","validation":"Compatibilidad por familia"},{"model":"CMC-MOD01","series":["C2000+"],"type":"Tarjeta de comunicación","description":"Tarjeta de comunicación descontinuada; reemplazada por CMC-EIP01.","protocol":"Modbus TCP","frame":[],"powerW":"","resistanceOhm":"","status":"Descontinuado","validation":"Usar reemplazo recomendado"},{"model":"CMC-PD01","series":["C2000+","CP2000"],"type":"Tarjeta de comunicación","description":"Tarjeta de comunicación PROFIBUS DP para las familias VFD-C y CP.","protocol":"PROFIBUS DP","frame":[],"powerW":"","resistanceOhm":"","status":"Vigente","validation":"Compatibilidad por familia"},{"model":"EMC-BPS01","series":["C2000+","CP2000"],"type":"Fuente de alimentación","description":"Tarjeta de alimentación externa de 24 VDC para las familias VFD-C y CP.","protocol":"","frame":[],"powerW":"","resistanceOhm":"","status":"Vigente","validation":"Compatibilidad por familia"},{"model":"EMC-PG01L","series":["C2000+"],"type":"Tarjeta de encoder","description":"Tarjeta de realimentación para encoder tipo Line Driver.","protocol":"Line Driver","frame":[],"powerW":"","resistanceOhm":"","status":"Vigente","validation":"Compatibilidad por familia"},{"model":"KPC-CC01","series":["C2000+","CP2000"],"type":"Teclado","description":"Teclado LCD en inglés para las familias VFD-C y CP.","protocol":"","frame":[],"powerW":"","resistanceOhm":"","status":"Vigente","validation":"Compatibilidad por familia"},{"model":"KPC-CE01","series":["C2000+","CP2000"],"type":"Teclado","description":"Teclado LED de una línea.","protocol":"","frame":[],"powerW":"","resistanceOhm":"","status":"Vigente","validation":"Confirmar aplicación específica"},{"model":"MKC-D0N1CB","series":["C2000+"],"type":"Caja conduit NEMA 1","description":"Kit de caja conduit NEMA 1 para frame D0, versión S.","protocol":"","frame":["D0"],"powerW":"","resistanceOhm":"","status":"Vigente","validation":"Validar frame del variador"},{"model":"MKC-DN1CB","series":["C2000+"],"type":"Caja conduit NEMA 1","description":"Kit de caja conduit NEMA 1 para frame D.","protocol":"","frame":["D"],"powerW":"","resistanceOhm":"","status":"Vigente","validation":"Validar frame del variador"},{"model":"MKC-EN1CB","series":["C2000+"],"type":"Caja conduit NEMA 1","description":"Kit de caja conduit NEMA 1 para frame E.","protocol":"","frame":["E"],"powerW":"","resistanceOhm":"","status":"Vigente","validation":"Validar frame del variador"},{"model":"MKC-FN1CB","series":["C2000+"],"type":"Caja conduit NEMA 1","description":"Kit de caja conduit NEMA 1 para frame F.","protocol":"","frame":["F"],"powerW":"","resistanceOhm":"","status":"Vigente","validation":"Validar frame del variador"},{"model":"MKC-GN1CB","series":["C2000+"],"type":"Caja conduit NEMA 1","description":"Kit de caja conduit NEMA 1 para frame G.","protocol":"","frame":["G"],"powerW":"","resistanceOhm":"","status":"Vigente","validation":"Validar frame del variador"},{"model":"CMM-COP01","series":["MS300"],"type":"Tarjeta de comunicación","description":"Tarjeta de comunicación CANopen para MS300.","protocol":"CANopen","frame":[],"powerW":"","resistanceOhm":"","status":"Vigente","validation":"Compatibilidad por familia"},{"model":"CMM-DN01","series":["MS300"],"type":"Tarjeta de comunicación","description":"Tarjeta de comunicación DeviceNet para MS300 y MH300.","protocol":"DeviceNet","frame":[],"powerW":"","resistanceOhm":"","status":"Vigente","validation":"Compatibilidad por familia"},{"model":"CMM-PD01","series":["MS300"],"type":"Tarjeta de comunicación","description":"Tarjeta de comunicación PROFIBUS DP para MS300 y MH300.","protocol":"PROFIBUS DP","frame":[],"powerW":"","resistanceOhm":"","status":"Vigente","validation":"Compatibilidad por familia"},{"model":"KPMS-LE01","series":["MS300"],"type":"Teclado","description":"Teclado LED para la familia MS300.","protocol":"","frame":[],"powerW":"","resistanceOhm":"","status":"Vigente","validation":"Compatibilidad por familia","buyUrl":"https://ceitsa.com.mx/p/KPMS-LE01"},{"model":"MKM-DRB","series":["MS300"],"type":"Kit de montaje DIN","description":"Kit para montaje en riel DIN para frames A o B.","protocol":"","frame":["A","B"],"powerW":"","resistanceOhm":"","status":"Vigente","validation":"Validar frame del variador"},{"model":"MKM-DRC","series":["MS300"],"type":"Kit de montaje DIN","description":"Kit para montaje en riel DIN para frame C.","protocol":"","frame":["C"],"powerW":"","resistanceOhm":"","status":"Vigente","validation":"Validar frame del variador"},{"model":"MKM-MAPB","series":["MS300"],"type":"Placa adaptadora","description":"Placa adaptadora para cableado pasante, frames A y B.","protocol":"","frame":["A","B"],"powerW":"","resistanceOhm":"","status":"Vigente","validation":"Validar frame del variador"},{"model":"MKM-MAPC","series":["MS300"],"type":"Placa adaptadora","description":"Placa adaptadora para cableado pasante, frame C.","protocol":"","frame":["C"],"powerW":"","resistanceOhm":"","status":"Vigente","validation":"Validar frame del variador"},{"model":"KPE-LE02","series":["VFD-EL"],"type":"Teclado","description":"Teclado estándar para la línea VFD-E/EL.","protocol":"","frame":[],"powerW":"","resistanceOhm":"","status":"Vigente","validation":"Confirmar versión del variador"},{"model":"MKEL-DRA","series":["VFD-EL"],"type":"Kit de montaje DIN","description":"Kit de montaje en riel DIN para frame A de VFD-EL.","protocol":"","frame":["A"],"powerW":"","resistanceOhm":"","status":"Vigente","validation":"Validar frame del variador"},{"model":"MKEL-DRB","series":["VFD-EL"],"type":"Kit de montaje DIN","description":"Kit de montaje en riel DIN para frame B de VFD-EL.","protocol":"","frame":["B"],"powerW":"","resistanceOhm":"","status":"Vigente","validation":"Validar frame del variador"},{"model":"BR080W200","series":["C2000+","CP2000","MS300","VFD-EL","VFD-EL-W"],"type":"Resistencia de frenado","description":"Resistencia de frenado de 80 W y 200 Ω.","protocol":"","frame":[],"powerW":"80","resistanceOhm":"200","status":"Vigente","validation":"Validar por modelo y régimen de frenado"},{"model":"BR080W750","series":["C2000+","CP2000","MS300","VFD-EL","VFD-EL-W"],"type":"Resistencia de frenado","description":"Resistencia de frenado de 80 W y 750 Ω.","protocol":"","frame":[],"powerW":"80","resistanceOhm":"750","status":"Vigente","validation":"Validar por modelo y régimen de frenado"},{"model":"BR1K0W016","series":["C2000+","CP2000","MS300","VFD-EL","VFD-EL-W"],"type":"Resistencia de frenado","description":"Resistencia de frenado de 1000 W y 16 Ω.","protocol":"","frame":[],"powerW":"1000","resistanceOhm":"16","status":"Vigente","validation":"Validar por modelo y régimen de frenado"},{"model":"BR1K0W020","series":["C2000+","CP2000","MS300","VFD-EL","VFD-EL-W"],"type":"Resistencia de frenado","description":"Resistencia de frenado de 1000 W y 20 Ω.","protocol":"","frame":[],"powerW":"1000","resistanceOhm":"20","status":"Vigente","validation":"Validar por modelo y régimen de frenado"},{"model":"BR1K0W050","series":["C2000+","CP2000","MS300","VFD-EL","VFD-EL-W"],"type":"Resistencia de frenado","description":"Resistencia de frenado de 1000 W y 50 Ω.","protocol":"","frame":[],"powerW":"1000","resistanceOhm":"50","status":"Vigente","validation":"Validar por modelo y régimen de frenado"},{"model":"BR1K0W075","series":["C2000+","CP2000","MS300","VFD-EL","VFD-EL-W"],"type":"Resistencia de frenado","description":"Resistencia de frenado de 1000 W y 75 Ω.","protocol":"","frame":[],"powerW":"1000","resistanceOhm":"75","status":"Vigente","validation":"Validar por modelo y régimen de frenado"},{"model":"BR1K0W4P3","series":["C2000+","CP2000","MS300","VFD-EL","VFD-EL-W"],"type":"Resistencia de frenado","description":"Resistencia de frenado de 1000 W y 4.3 Ω.","protocol":"","frame":[],"powerW":"1000","resistanceOhm":"4.3","status":"Vigente","validation":"Validar por modelo y régimen de frenado"},{"model":"BR1K0W5P1","series":["C2000+","CP2000","MS300","VFD-EL","VFD-EL-W"],"type":"Resistencia de frenado","description":"Resistencia de frenado de 1000 W y 5.1 Ω.","protocol":"","frame":[],"powerW":"1000","resistanceOhm":"5.1","status":"Vigente","validation":"Validar por modelo y régimen de frenado"},{"model":"BR1K1W024","series":["C2000+","CP2000","MS300","VFD-EL","VFD-EL-W"],"type":"Resistencia de frenado","description":"Resistencia de frenado de 1100 W y 24 Ω.","protocol":"","frame":[],"powerW":"1100","resistanceOhm":"24","status":"Vigente","validation":"Validar por modelo y régimen de frenado"},{"model":"BR1K1W091","series":["C2000+","CP2000","MS300","VFD-EL","VFD-EL-W"],"type":"Resistencia de frenado","description":"Resistencia de frenado de 1100 W y 91 Ω.","protocol":"","frame":[],"powerW":"1100","resistanceOhm":"91","status":"Vigente","validation":"Validar por modelo y régimen de frenado"},{"model":"BR1K2W008","series":["C2000+","CP2000","MS300","VFD-EL","VFD-EL-W"],"type":"Resistencia de frenado","description":"Resistencia de frenado de 1200 W y 8 Ω.","protocol":"","frame":[],"powerW":"1200","resistanceOhm":"8","status":"Vigente","validation":"Validar por modelo y régimen de frenado"},{"model":"BR1K2W015","series":["C2000+","CP2000","MS300","VFD-EL","VFD-EL-W"],"type":"Resistencia de frenado","description":"Resistencia de frenado de 1200 W y 15 Ω.","protocol":"","frame":[],"powerW":"1200","resistanceOhm":"15","status":"Vigente","validation":"Validar por modelo y régimen de frenado"},{"model":"BR1K2W3P9","series":["C2000+","CP2000","MS300","VFD-EL","VFD-EL-W"],"type":"Resistencia de frenado","description":"Resistencia de frenado de 1200 W y 3.9 Ω.","protocol":"","frame":[],"powerW":"1200","resistanceOhm":"3.9","status":"Vigente","validation":"Validar por modelo y régimen de frenado"},{"model":"BR1K2W6P8","series":["C2000+","CP2000","MS300","VFD-EL","VFD-EL-W"],"type":"Resistencia de frenado","description":"Resistencia de frenado de 1200 W y 6.8 Ω.","protocol":"","frame":[],"powerW":"1200","resistanceOhm":"6.8","status":"Vigente","validation":"Validar por modelo y régimen de frenado"},{"model":"BR1K5W005","series":["C2000+","CP2000","MS300","VFD-EL","VFD-EL-W"],"type":"Resistencia de frenado","description":"Resistencia de frenado de 1500 W y 5 Ω.","protocol":"","frame":[],"powerW":"1500","resistanceOhm":"5","status":"Vigente","validation":"Validar por modelo y régimen de frenado"},{"model":"BR1K5W012","series":["C2000+","CP2000","MS300","VFD-EL","VFD-EL-W"],"type":"Resistencia de frenado","description":"Resistencia de frenado de 1500 W y 12 Ω.","protocol":"","frame":[],"powerW":"1500","resistanceOhm":"12","status":"Vigente","validation":"Validar por modelo y régimen de frenado"},{"model":"BR1K5W013","series":["C2000+","CP2000","MS300","VFD-EL","VFD-EL-W"],"type":"Resistencia de frenado","description":"Resistencia de frenado de 1500 W y 13 Ω.","protocol":"","frame":[],"powerW":"1500","resistanceOhm":"13","status":"Vigente","validation":"Validar por modelo y régimen de frenado"},{"model":"BR1K5W040","series":["C2000+","CP2000","MS300","VFD-EL","VFD-EL-W"],"type":"Resistencia de frenado","description":"Resistencia de frenado de 1500 W y 40 Ω.","protocol":"","frame":[],"powerW":"1500","resistanceOhm":"40","status":"Vigente","validation":"Validar por modelo y régimen de frenado"},{"model":"BR1K5W043","series":["C2000+","CP2000","MS300","VFD-EL","VFD-EL-W"],"type":"Resistencia de frenado","description":"Resistencia de frenado de 1500 W y 43 Ω.","protocol":"","frame":[],"powerW":"1500","resistanceOhm":"43","status":"Vigente","validation":"Validar por modelo y régimen de frenado"},{"model":"BR1K5W3P3","series":["C2000+","CP2000","MS300","VFD-EL","VFD-EL-W"],"type":"Resistencia de frenado","description":"Resistencia de frenado de 1500 W y 3.3 Ω.","protocol":"","frame":[],"powerW":"1500","resistanceOhm":"3.3","status":"Vigente","validation":"Validar por modelo y régimen de frenado"},{"model":"BR200W091","series":["C2000+","CP2000","MS300","VFD-EL","VFD-EL-W"],"type":"Resistencia de frenado","description":"Resistencia de frenado de 200 W y 91 Ω.","protocol":"","frame":[],"powerW":"200","resistanceOhm":"91","status":"Vigente","validation":"Validar por modelo y régimen de frenado"},{"model":"BR200W150","series":["C2000+","CP2000","MS300","VFD-EL","VFD-EL-W"],"type":"Resistencia de frenado","description":"Resistencia de frenado de 200 W y 150 Ω.","protocol":"","frame":[],"powerW":"200","resistanceOhm":"150","status":"Vigente","validation":"Validar por modelo y régimen de frenado"},{"model":"BR200W250","series":["C2000+","CP2000","MS300","VFD-EL","VFD-EL-W"],"type":"Resistencia de frenado","description":"Resistencia de frenado de 200 W y 250 Ω.","protocol":"","frame":[],"powerW":"200","resistanceOhm":"250","status":"Vigente","validation":"Validar por modelo y régimen de frenado"},{"model":"BR200W360","series":["C2000+","CP2000","MS300","VFD-EL","VFD-EL-W"],"type":"Resistencia de frenado","description":"Resistencia de frenado de 200 W y 360 Ω.","protocol":"","frame":[],"powerW":"200","resistanceOhm":"360","status":"Vigente","validation":"Validar por modelo y régimen de frenado"},{"model":"BR300W070","series":["C2000+","CP2000","MS300","VFD-EL","VFD-EL-W"],"type":"Resistencia de frenado","description":"Resistencia de frenado de 300 W y 70 Ω.","protocol":"","frame":[],"powerW":"300","resistanceOhm":"70","status":"Vigente","validation":"Validar por modelo y régimen de frenado"},{"model":"BR300W082","series":["C2000+","CP2000","MS300","VFD-EL","VFD-EL-W"],"type":"Resistencia de frenado","description":"Resistencia de frenado de 300 W y 82 Ω.","protocol":"","frame":[],"powerW":"300","resistanceOhm":"82","status":"Vigente","validation":"Validar por modelo y régimen de frenado"},{"model":"BR300W100","series":["C2000+","CP2000","MS300","VFD-EL","VFD-EL-W"],"type":"Resistencia de frenado","description":"Resistencia de frenado de 300 W y 100 Ω.","protocol":"","frame":[],"powerW":"300","resistanceOhm":"100","status":"Vigente","validation":"Validar por modelo y régimen de frenado"},{"model":"BR300W250","series":["C2000+","CP2000","MS300","VFD-EL","VFD-EL-W"],"type":"Resistencia de frenado","description":"Resistencia de frenado de 300 W y 250 Ω.","protocol":"","frame":[],"powerW":"300","resistanceOhm":"250","status":"Vigente","validation":"Validar por modelo y régimen de frenado"},{"model":"BR300W400","series":["C2000+","CP2000","MS300","VFD-EL","VFD-EL-W"],"type":"Resistencia de frenado","description":"Resistencia de frenado de 300 W y 400 Ω.","protocol":"","frame":[],"powerW":"300","resistanceOhm":"400","status":"Vigente","validation":"Validar por modelo y régimen de frenado"},{"model":"BR400W040","series":["C2000+","CP2000","MS300","VFD-EL","VFD-EL-W"],"type":"Resistencia de frenado","description":"Resistencia de frenado de 400 W y 40 Ω.","protocol":"","frame":[],"powerW":"400","resistanceOhm":"40","status":"Vigente","validation":"Validar por modelo y régimen de frenado"},{"model":"BR400W150","series":["C2000+","CP2000","MS300","VFD-EL","VFD-EL-W"],"type":"Resistencia de frenado","description":"Resistencia de frenado de 400 W y 150 Ω.","protocol":"","frame":[],"powerW":"400","resistanceOhm":"150","status":"Vigente","validation":"Validar por modelo y régimen de frenado"},{"model":"BR500W030","series":["C2000+","CP2000","MS300","VFD-EL","VFD-EL-W"],"type":"Resistencia de frenado","description":"Resistencia de frenado de 500 W y 30 Ω.","protocol":"","frame":[],"powerW":"500","resistanceOhm":"30","status":"Vigente","validation":"Validar por modelo y régimen de frenado"},{"model":"BR500W056","series":["C2000+","CP2000","MS300","VFD-EL","VFD-EL-W"],"type":"Resistencia de frenado","description":"Resistencia de frenado de 500 W y 56 Ω.","protocol":"","frame":[],"powerW":"500","resistanceOhm":"56","status":"Vigente","validation":"Validar por modelo y régimen de frenado"},{"model":"BR500W100","series":["C2000+","CP2000","MS300","VFD-EL","VFD-EL-W"],"type":"Resistencia de frenado","description":"Resistencia de frenado de 500 W y 100 Ω.","protocol":"","frame":[],"powerW":"500","resistanceOhm":"100","status":"Vigente","validation":"Validar por modelo y régimen de frenado"},{"model":"BR650W039","series":["C2000+","CP2000","MS300","VFD-EL","VFD-EL-W"],"type":"Resistencia de frenado","description":"Resistencia de frenado de 650 W y 39 Ω.","protocol":"","frame":[],"powerW":"650","resistanceOhm":"39","status":"Vigente","validation":"Validar por modelo y régimen de frenado"},{"model":"BR750W033","series":["C2000+","CP2000","MS300","VFD-EL","VFD-EL-W"],"type":"Resistencia de frenado","description":"Resistencia de frenado de 750 W y 33 Ω.","protocol":"","frame":[],"powerW":"750","resistanceOhm":"33","status":"Vigente","validation":"Validar por modelo y régimen de frenado"},{"model":"BR750W140","series":["C2000+","CP2000","MS300","VFD-EL","VFD-EL-W"],"type":"Resistencia de frenado","description":"Resistencia de frenado de 750 W y 140 Ω.","protocol":"","frame":[],"powerW":"750","resistanceOhm":"140","status":"Vigente","validation":"Validar por modelo y régimen de frenado"}];
const whatsapp="https://wa.me/5217201185420";

const familyDescriptions={
  "VFD-EL":"Variador compacto multifunción para aplicaciones simples de velocidad variable.",
  "VFD-EL-W":"Variador compacto económico para control simple de velocidad y aplicaciones de carga fija.",
  "MS300":"Variador compacto moderno con funciones integradas para automatización industrial general.",
  "C2000+":"Variador de alto desempeño para aplicaciones de torque constante y control preciso.",
  "CP2000":"Variador especializado para bombas, ventiladores y sistemas HVAC con enfoque en ahorro energético."
};

const driveState={
  family:"",
  voltage:"",
  phase:"",
  kw:"",
  enclosure:"",
  frame:"",
  emc:"",
  search:""
};

const driveGroups={
  family:document.querySelector("#familyChoices"),
  voltage:document.querySelector("#voltageChoices"),
  phase:document.querySelector("#phaseChoices"),
  kw:document.querySelector("#powerChoices"),
  enclosure:document.querySelector("#enclosureChoices"),
  frame:document.querySelector("#frameChoices"),
  emc:document.querySelector("#emcChoices")
};

const driveSearch=document.querySelector("#driveSearch");
const driveList=document.querySelector("#driveModelList");
const driveResultTitle=document.querySelector("#driveResultTitle");
const driveResultCount=document.querySelector("#driveResultCount");
const driveDescription=document.querySelector("#driveDescription");
const driveSummary=document.querySelector("#driveSummary");

let selectedDrive=null;

const accessoryState={
  family:"",
  type:"",
  protocol:"",
  powerW:"",
  resistanceOhm:"",
  search:""
};

const accessoryGroups={
  family:document.querySelector("#accessoryFamilyChoices"),
  type:document.querySelector("#accessoryTypeChoices"),
  protocol:document.querySelector("#accessoryProtocolChoices"),
  powerW:document.querySelector("#accessoryPowerChoices"),
  resistanceOhm:document.querySelector("#accessoryResistanceChoices")
};

const accessoryPanel=document.querySelector("#accessoryPanel");
const accessorySearch=document.querySelector("#accessorySearch");
const accessoryList=document.querySelector("#accessoryList");
const accessoryResultTitle=document.querySelector("#accessoryResultTitle");
const accessoryResultKicker=document.querySelector("#accessoryResultKicker");
const accessoryResultCount=document.querySelector("#accessoryResultCount");
const accessoryPanelTitle=document.querySelector("#accessoryPanelTitle");
const selectedDriveText=document.querySelector("#selectedDriveText");
const clearSelectedDriveButton=document.querySelector("#closeAccessories");

const unique=items=>[...new Set(items.filter(Boolean))];
const voltageLabel=value=>`${value} VCA`;
const phaseLabel=value=>value==="1"?"Monofásica":"Trifásica";

function driveTextMatches(item){
  const query=driveState.search.trim().toLowerCase();
  if(!query)return true;
  return [
    item.model,item.family,item.voltage,item.phase,item.kw,item.hp,
    item.enclosure,item.frame,item.emc,item.description
  ].join(" ").toLowerCase().includes(query);
}

function driveMatches(item,excluded=""){
  return Object.entries(driveState).every(([key,value])=>{
    if(key==="search")return driveTextMatches(item);
    return !value||key===excluded||item[key]===value;
  });
}

function driveValues(key){
  return unique(drives.map(item=>item[key]));
}

function sortDriveValues(key,values){
  if(["voltage","phase","kw"].includes(key))return values.sort((a,b)=>Number(a)-Number(b));
  const familyOrder=["VFD-EL","VFD-EL-W","MS300","C2000+","CP2000"];
  if(key==="family")return values.sort((a,b)=>familyOrder.indexOf(a)-familyOrder.indexOf(b));
  if(key==="frame"){
    const frameOrder=["A","A1","A2","B","C","D","D0","E","F","G","H"];
    return values.sort((a,b)=>frameOrder.indexOf(a)-frameOrder.indexOf(b));
  }
  return values.sort((a,b)=>a.localeCompare(b,"es"));
}

function driveButtonLabel(key,value){
  if(key==="voltage")return voltageLabel(value);
  if(key==="phase")return phaseLabel(value);
  if(key==="kw"){
    const ref=drives.find(item=>item.kw===value);
    return `<span class="choice-main">${ref?.hp||"—"} HP</span><span class="choice-sub">${value} kW</span>`;
  }
  return value;
}

function makeChoiceButton(state,key,value,label,available){
  const selected=state[key]===value;
  return `<button
    class="choice-btn${selected?" is-selected":""}"
    type="button"
    data-key="${key}"
    data-value="${value}"
    aria-pressed="${selected}"
    ${available?"":"disabled"}
  >${label}</button>`;
}

function normalizeDriveState(){
  let changed=true;
  while(changed){
    changed=false;
    Object.keys(driveGroups).forEach(key=>{
      const value=driveState[key];
      if(!value)return;
      const valid=drives.some(item=>driveMatches(item,key)&&item[key]===value);
      if(!valid){
        driveState[key]="";
        changed=true;
      }
    });
  }
}

function renderDriveGroups(){
  Object.entries(driveGroups).forEach(([key,group])=>{
    const values=sortDriveValues(key,driveValues(key));
    group.innerHTML=values.map(value=>{
      const available=drives.some(item=>driveMatches(item,key)&&item[key]===value);
      return makeChoiceButton(driveState,key,value,driveButtonLabel(key,value),available);
    }).join("");
  });
}

function compatibleDrives(){
  return drives.filter(item=>driveMatches(item));
}

function accessoryCountForDrive(drive){
  return accessories.filter(item=>{
    if(!item.series.includes(drive.family))return false;
    return !item.frame.length||item.frame.includes(drive.frame);
  }).length;
}

function renderDriveSummary(){
  const active=Object.values(driveState).some(Boolean);
  driveSummary.classList.toggle("is-visible",active);
  document.querySelector("#sumFamily").textContent=driveState.family||"Cualquiera";
  document.querySelector("#sumVoltage").textContent=driveState.voltage?voltageLabel(driveState.voltage):"Cualquiera";
  document.querySelector("#sumPhase").textContent=driveState.phase?phaseLabel(driveState.phase):"Cualquiera";
  document.querySelector("#sumPower").textContent=driveState.kw?`${driveState.kw} kW`:"Cualquiera";
  document.querySelector("#sumEnclosure").textContent=driveState.enclosure||"Cualquiera";
  document.querySelector("#sumFrame").textContent=driveState.frame||"Cualquiera";
  document.querySelector("#sumEmc").textContent=driveState.emc||"Cualquiera";
}

function renderDrives(){
  const found=compatibleDrives();
  const active=Object.values(driveState).some(Boolean);

  driveResultCount.textContent=`${found.length} ${found.length===1?"modelo":"modelos"}`;
  driveResultTitle.textContent=found.length===1
    ?"Modelo encontrado"
    :active
      ?"Modelos compatibles"
      :"Catálogo completo";

  driveDescription.textContent=driveState.family
    ?familyDescriptions[driveState.family]
    :active
      ?"Consulta cruzada entre todas las familias compatibles con los atributos seleccionados."
      :"Consulta abierta entre todas las familias. Selecciona cualquier atributo para reducir los resultados.";

  renderDriveSummary();

  if(selectedDrive&&!found.some(item=>item.model===selectedDrive.model)){
    clearSelectedDrive();
  }

  if(!found.length){
    driveList.innerHTML=`<div class="empty">
      No existe un variador que coincida con todos los atributos seleccionados.
    </div>`;
    return;
  }

  driveList.innerHTML=found.map(item=>{
    const tags=[
      item.enclosure,
      item.frame?`Frame ${item.frame}`:"",
      item.emc,
      item.current?`${item.current} A`:"",
      item.hd?`${item.hd} A HD`:"",
      item.nd?`${item.nd} A ND`:"",
      item.frequency
    ].filter(Boolean);

    const selected=selectedDrive?.model===item.model;
    const count=accessoryCountForDrive(item);

    return `<article class="model-card${selected?" is-accessory-source":""}" data-drive-card="${item.model}">
      <div class="model-top">
        <div>
          <p class="model-code">${item.model}</p>
          <p class="model-meta">
            ${item.family} · ${voltageLabel(item.voltage)} ·
            Entrada ${phaseLabel(item.phase).toLowerCase()} ·
            ${item.kw} kW / ${item.hp} HP
          </p>
        </div>
        <span class="match">Coincide con la selección</span>
      </div>

      <div class="model-tags">
        ${tags.map(tag=>`<span class="tag">${tag}</span>`).join("")}
      </div>

      <div class="model-actions">
        ${item.buyUrl
          ?`<a class="primary-link" href="${item.buyUrl}" target="_blank" rel="noopener noreferrer">Comprar en CEITSA</a>
             `
          :`<a class="quote-link" href="${item.quoteUrl}" target="_blank" rel="noopener noreferrer">Solicitar cotización</a>`
        }
        <button
          class="accessory-btn${selected?" is-active":""}"
          type="button"
          data-accessories-for="${item.model}"
        >${selected?"Accesorios seleccionados":`Ver accesorios (${count})`}</button>
      </div>
    </article>`;
  }).join("");
}

function refreshDrives(){
  normalizeDriveState();
  renderDriveGroups();
  renderDrives();
}

function updateAccessoryHeader(){
  if(selectedDrive){
    accessoryPanelTitle.textContent=`Accesorios para ${selectedDrive.model}`;
    selectedDriveText.textContent=
      `${selectedDrive.family} · ${voltageLabel(selectedDrive.voltage)} · `+
      `${phaseLabel(selectedDrive.phase)} · ${selectedDrive.hp} HP / ${selectedDrive.kw} kW · Frame ${selectedDrive.frame}`;
    clearSelectedDriveButton.hidden=false;
    return;
  }

  accessoryPanelTitle.textContent="Selector de accesorios";
  selectedDriveText.textContent=accessoryState.family
    ?`Accesorios disponibles para la familia ${accessoryState.family}.`
    :"Consulta todos los accesorios o comienza seleccionando una familia de variador.";
  clearSelectedDriveButton.hidden=true;
}

function clearSelectedDrive({preserveFamily=true}={}){
  const previousFamily=selectedDrive?.family||"";
  selectedDrive=null;

  if(!preserveFamily&&previousFamily&&accessoryState.family===previousFamily){
    accessoryState.family="";
  }

  updateAccessoryHeader();
}

function selectDrive(model){
  selectedDrive=drives.find(item=>item.model===model)||null;
  if(!selectedDrive)return;

  accessoryState.family=selectedDrive.family;
  driveState.family=selectedDrive.family;

  updateAccessoryHeader();
  refreshDrives();
  refreshAccessories();
  accessoryPanel.scrollIntoView({behavior:"smooth",block:"start"});
}

Object.values(driveGroups).forEach(group=>{
  group.addEventListener("click",event=>{
    const button=event.target.closest(".choice-btn");
    if(!button||button.disabled)return;
    const {key,value}=button.dataset;
    driveState[key]=driveState[key]===value?"":value;

    if(key==="family"){
      accessoryState.family=driveState.family;
      if(selectedDrive&&selectedDrive.family!==driveState.family){
        clearSelectedDrive();
      }
      refreshAccessories();
    }

    refreshDrives();
  });
});

driveSearch.addEventListener("input",()=>{
  driveState.search=driveSearch.value;
  refreshDrives();
});

driveList.addEventListener("click",event=>{
  const button=event.target.closest("[data-accessories-for]");
  if(!button)return;
  selectDrive(button.dataset.accessoriesFor);
});

document.querySelector("#resetDriveFilters").addEventListener("click",()=>{
  Object.keys(driveState).forEach(key=>driveState[key]="");
  driveSearch.value="";
  accessoryState.family="";
  clearSelectedDrive();
  refreshDrives();
  refreshAccessories();
});

function compatibleAccessoriesBase(){
  if(!selectedDrive)return accessories;
  return accessories.filter(item=>{
    if(!item.series.includes(selectedDrive.family))return false;
    return !item.frame.length||item.frame.includes(selectedDrive.frame);
  });
}

function accessoryTextMatches(item){
  const query=accessoryState.search.trim().toLowerCase();
  if(!query)return true;
  return [
    item.model,item.type,item.description,item.protocol,item.status,
    item.powerW,item.resistanceOhm
  ].join(" ").toLowerCase().includes(query);
}

function accessoryMatches(item,excluded=""){
  return Object.entries(accessoryState).every(([key,value])=>{
    if(key==="search")return accessoryTextMatches(item);
    if(!value||key===excluded)return true;
    if(key==="family")return item.series.includes(value);
    return item[key]===value;
  });
}

function accessoryValues(key){
  if(key==="family"){
    return unique(compatibleAccessoriesBase().flatMap(item=>item.series));
  }
  return unique(compatibleAccessoriesBase().map(item=>item[key]));
}

function sortAccessoryValues(key,values){
  if(["powerW","resistanceOhm"].includes(key))return values.sort((a,b)=>Number(a)-Number(b));
  if(key==="family"){
    const order=["VFD-EL","VFD-EL-W","MS300","C2000+","CP2000"];
    return values.sort((a,b)=>order.indexOf(a)-order.indexOf(b));
  }
  return values.sort((a,b)=>a.localeCompare(b,"es"));
}

function accessoryButtonLabel(key,value){
  if(key==="powerW")return `${value} W`;
  if(key==="resistanceOhm")return `${value} Ω`;
  return value;
}

function normalizeAccessoryState(){
  let changed=true;
  const base=compatibleAccessoriesBase();
  while(changed){
    changed=false;
    Object.keys(accessoryGroups).forEach(key=>{
      const value=accessoryState[key];
      if(!value)return;
      const valid=base.some(item=>{
        if(!accessoryMatches(item,key))return false;
        return key==="family"?item.series.includes(value):item[key]===value;
      });
      if(!valid){
        accessoryState[key]="";
        changed=true;
      }
    });
  }
}

function renderAccessoryGroups(){
  const base=compatibleAccessoriesBase();
  Object.entries(accessoryGroups).forEach(([key,group])=>{
    const values=sortAccessoryValues(key,accessoryValues(key));
    group.innerHTML=values.map(value=>{
      const available=base.some(item=>{
        if(!accessoryMatches(item,key))return false;
        return key==="family"?item.series.includes(value):item[key]===value;
      });
      return makeChoiceButton(accessoryState,key,value,accessoryButtonLabel(key,value),available);
    }).join("");
  });
}

function compatibleAccessories(){
  return compatibleAccessoriesBase().filter(item=>accessoryMatches(item));
}

function accessoryQuoteUrl(item){
  const driveLine=selectedDrive
    ?`Variador: ${selectedDrive.model}%0A`
    :"";
  const familyLine=(selectedDrive?.family||accessoryState.family)
    ?`Familia: ${selectedDrive?.family||accessoryState.family}%0A`
    :"";

  const message=
    `Hola, quiero solicitar una cotización.%0A%0A`+
    driveLine+
    familyLine+
    `Accesorio: ${item.model}%0A`+
    `Tipo: ${item.type}`;

  return `${whatsapp}?text=${message}`;
}

function renderAccessories(){
  const found=compatibleAccessories();
  const active=Object.values(accessoryState).some(Boolean);

  updateAccessoryHeader();

  accessoryResultKicker.textContent=selectedDrive
    ?`Accesorios para ${selectedDrive.model}`
    :accessoryState.family
      ?`Accesorios para ${accessoryState.family}`
      :"Catálogo de accesorios";

  accessoryResultCount.textContent=`${found.length} ${found.length===1?"modelo":"modelos"}`;
  accessoryResultTitle.textContent=found.length===1
    ?"Accesorio encontrado"
    :active
      ?"Accesorios filtrados"
      :"Todos los accesorios";

  if(!found.length){
    accessoryList.innerHTML=`<div class="empty">
      No existe un accesorio que coincida con los filtros seleccionados.
    </div>`;
    return;
  }

  accessoryList.innerHTML=found.map(item=>{
    const isBrake=item.type==="Resistencia de frenado";
    const tags=[
      item.type,
      item.protocol,
      item.powerW?`${item.powerW} W`:"",
      item.resistanceOhm?`${item.resistanceOhm} Ω`:"",
      item.status
    ].filter(Boolean);

    return `<article class="accessory-card">
      <div class="model-top">
        <div>
          <p class="model-code">${item.model}</p>
          <p class="model-meta">${item.description}</p>
        </div>
        <span class="match${isBrake?" requires-validation":""}">
          ${isBrake?"Requiere validación":"Compatible por familia"}
        </span>
      </div>

      <div class="accessory-tags">
        ${tags.map(tag=>`<span class="tag${tag==="Descontinuado"?" obsolete":""}">${tag}</span>`).join("")}
      </div>

      <div class="accessory-actions">
        ${item.buyUrl
          ?`<a class="primary-link" href="${item.buyUrl}" target="_blank" rel="noopener noreferrer">Comprar en CEITSA</a>`
          :`<a class="quote-link" href="${accessoryQuoteUrl(item)}" target="_blank" rel="noopener noreferrer">Solicitar cotización</a>`
        }
        <span class="action-note">${item.validation}</span>
      </div>
    </article>`;
  }).join("");
}

function refreshAccessories(){
  normalizeAccessoryState();
  renderAccessoryGroups();
  renderAccessories();
}

Object.values(accessoryGroups).forEach(group=>{
  group.addEventListener("click",event=>{
    const button=event.target.closest(".choice-btn");
    if(!button||button.disabled)return;
    const {key,value}=button.dataset;
    accessoryState[key]=accessoryState[key]===value?"":value;

    if(key==="family"){
      driveState.family=accessoryState.family;
      if(selectedDrive&&selectedDrive.family!==accessoryState.family){
        clearSelectedDrive();
      }
      refreshDrives();
    }

    refreshAccessories();
  });
});

accessorySearch.addEventListener("input",()=>{
  accessoryState.search=accessorySearch.value;
  refreshAccessories();
});

document.querySelector("#resetAccessoryFilters").addEventListener("click",()=>{
  Object.keys(accessoryState).forEach(key=>accessoryState[key]="");
  accessorySearch.value="";
  driveState.family="";
  clearSelectedDrive();
  refreshDrives();
  refreshAccessories();
});

document.querySelector("#closeAccessories").addEventListener("click",()=>{
  clearSelectedDrive();
  renderDrives();
  refreshAccessories();
});

refreshDrives();
refreshAccessories();
})();
