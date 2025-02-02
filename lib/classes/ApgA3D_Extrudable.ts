/** ---------------------------------------------------------------------------
 * @module [ApgA3D]
 * @author [APG] ANGELI Paolo Giusto 
 * @version 0.1 APG 20231114
 * @version 0.2 APG 20231226 In Its own file
 * @version 0.2 APG 20241209 Moved to A3D module
 * ----------------------------------------------------------------------------
 */

import { ApgA3D_ePlacementOperation } from "../enums/ApgA3D_ePlacementOperation.ts";
import { ApgA3D_IPlacementOperation } from "../interfaces/ApgA3D_IPlacementOperation.ts";




/**
 * Base class for extrudable and positionable meshes.
 */
export class ApgA3D_Extrudable {


    length = 0;

    placementOps: ApgA3D_IPlacementOperation[] = [];



    #addOp(
        aop: ApgA3D_IPlacementOperation,
        aindex: number
    ) {
        const i = Math.round(aindex);
        if (i < 0 || i >= this.placementOps.length) {
            this.placementOps.push(aop);
        }
        else {
            this.placementOps.splice(i, 0, aop);
        }

    }



    addRotateXOp(
        aradians: number,
        aisFlippable: boolean,
        aindex = -1
    ) {
        const op: ApgA3D_IPlacementOperation = {
            operation: ApgA3D_ePlacementOperation.ROTATE_X_IN_RAD,
            value: aradians,
            isFlippable: aisFlippable
        }
        this.#addOp(op, aindex);
    }



    addRotateYOp(
        aradians: number,
        aisFlippable: boolean,
        aindex = -1
    ) {
        const op: ApgA3D_IPlacementOperation = {
            operation: ApgA3D_ePlacementOperation.ROTATE_Y_IN_RAD,
            value: aradians,
            isFlippable: aisFlippable
        }
        this.#addOp(op, aindex);
    }



    addRotateZOp(
        aradians: number,
        aisFlippable: boolean,
        aindex = -1
    ) {
        const op: ApgA3D_IPlacementOperation = {
            operation: ApgA3D_ePlacementOperation.ROTATE_Z_IN_RAD,
            value: aradians,
            isFlippable: aisFlippable
        }
        this.#addOp(op, aindex);
    }



    addTranslateXOp(
        amillimeters: number,
        aisFlippable: boolean,
        aindex = -1
    ) {
        const op: ApgA3D_IPlacementOperation = {
            operation: ApgA3D_ePlacementOperation.TRANSLATE_X_IN_MM,
            value: amillimeters,
            isFlippable: aisFlippable
        }
        this.#addOp(op, aindex);
    }



    addTranslateYOp(
        amillimeters: number,
        aisFlippable: boolean,
        aindex = -1
    ) {
        const op: ApgA3D_IPlacementOperation = {
            operation: ApgA3D_ePlacementOperation.TRANSLATE_Y_IN_MM,
            value: amillimeters,
            isFlippable: aisFlippable
        }
        this.#addOp(op, aindex);
    }



    addTranslateZOp(
        amillimeters: number,
        aisFlippable: boolean,
        aindex = -1
    ) {
        const op: ApgA3D_IPlacementOperation = {
            operation: ApgA3D_ePlacementOperation.TRANSLATE_Z_IN_MM,
            value: amillimeters,
            isFlippable: aisFlippable
        }
        this.#addOp(op, aindex);
    }

}
