/** ---------------------------------------------------------------------------
 * @module [ApgA3D]
 * @author [APG] Angeli Paolo Giusto
 * @version 0.1 APG 20231227
 * ----------------------------------------------------------------------------
 */

import {
  ApgA3D_ePlacementOperation
} from "../enums/ApgA3D_ePlacementOperation.ts";

/**
 * Operazione di posizionamento o di orientamento dei componenti 
 * dei prodotti nello spazio tridimensionale
 */
export interface ApgA3D_IPlacementOperation {

  /**
   * Codice identificativo del tipo di operazione di traslazione o rotazione
   */
  operation: ApgA3D_ePlacementOperation;

  /**
   * Valore della operazione di tralazione o di rotazione
   */
  value: number;

  /**
   * Flag che definisce una operazione di coppia che può essere applicata 
   * al secondo oggetto della coppia semplicemente invertendo il segno del 
   * valore numerico al campo precedente.
   */
  isFlippable: boolean;
  
}
