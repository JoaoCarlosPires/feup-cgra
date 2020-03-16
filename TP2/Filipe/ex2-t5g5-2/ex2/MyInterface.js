/**
* MyInterface
* @constructor
*/
class MyInterface extends CGFinterface {
    constructor() {
        super();
    }

    init(application) {
        // call CGFinterface init
        super.init(application);
        // init GUI. For more information on the methods, check:
        // http://workshop.chromeexperiments.com/examples/gui
        this.gui = new dat.GUI();
        
        var obj = this;

        //Checkbox element in GUI
        this.gui.add(this.scene, 'displayAxis').name('Display Axis');

        this.gui.add(this.scene, 'displayDiamond').name('Display Diamond');

        this.gui.add(this.scene, 'displayTriangle').name('Display Triangle');

        this.gui.add(this.scene, 'displayParallelogram').name('Display Parall');

        this.gui.add(this.scene, 'displaySmall').name('Display Small');

        this.gui.add(this.scene, 'displayBig').name('Display Big');

        this.gui.add(this.scene, 'displayTangram').name('Display Tangram');
        
        this.gui.add(this.scene, "displayUnitCube").name('Display UnitCube');

        this.gui.add(this.scene, "displayUnitCubeTan").name('UnitCubeTan');

        //Slider element in GUI
        this.gui.add(this.scene, 'scaleFactor', 0.1, 5).name('Scale Factor');

        return true;
    }
}