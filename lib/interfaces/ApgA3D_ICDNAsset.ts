/** ---------------------------------------------------------------------------
 * @module [BrdGlb]
 * @author [APG] Angeli Paolo Giusto
 * @version 0.1 APG 20240225
 * ----------------------------------------------------------------------------
 */

import { ApgA3D_eTextureType } from "../enums/ApgA3D_eTextureType.ts";



/**
 * Dati dell'asset (solitamente una texture) salvata remotamente in un Content Delivery Network (CDN)
 */
export interface ApgA3D_ICDNAsset {

  /**
   * Identificatore del CDN Asset
   */
  CDNAssetId: string;

  /**
   * Tipo della texture
   */
  type: ApgA3D_eTextureType;

  /**
   * Percorso per l'asset locale da usare durante lo sviluppo in locale
   */
  local: string;

  /**
   * Url di riferimento per la pagina di caricamento o di riferimento dell'asset nel CDN remoto
   */
  remoteUrl_1?: string;

  /**
   * Url remoto dell'asset nel CDN. Per la distribuzione in produzione su Deno Deploy 
   * dovrebbe essere sempre definito e disponibile.
   */
  remote_1?: string;
}
