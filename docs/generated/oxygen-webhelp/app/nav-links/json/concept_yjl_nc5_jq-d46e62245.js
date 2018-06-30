define({"topics" : [{"title":"Processors","shortdesc":"\n            <p class=\"shortdesc\"></p>\n         ","id":"concept_hpr_twm_jq","href":"datacollector\/UserGuide\/Processors\/Processors_overview.html#concept_hpr_twm_jq","menu": {"hasChildren":false,},"tocID":"concept_hpr_twm_jq-d46e62267","topics":[]},{"title":"Aggregator","id":"concept_ofb_svm_5bb","href":"datacollector\/UserGuide\/Processors\/Aggregator.html#concept_ofb_svm_5bb","menu": {"hasChildren":true,},"tocID":"concept_ofb_svm_5bb-d46e62291","next":"concept_ofb_svm_5bb-d46e62291",},{"title":"Base64 Field Decoder","shortdesc":"\n            <p class=\"shortdesc\">The Base64 Field Decoder decodes Base64 encoded data to binary data. Use the processor         to decode Base64 encoded data\n               before evaluating data in the field.\n            </p>\n         ","id":"concept_ujj_spy_kv","href":"datacollector\/UserGuide\/Processors\/Base64Decoder.html#concept_ujj_spy_kv","menu": {"hasChildren":true,},"tocID":"concept_ujj_spy_kv-d46e63088","next":"concept_ujj_spy_kv-d46e63088",},{"title":"Base64 Field Encoder","shortdesc":"\n            <p class=\"shortdesc\">The Base64 Field Encoder encodes binary data using Base64. Use the processor to encode         binary data that must be sent\n               over channels that expect ASCII data.\n            </p>\n         ","id":"concept_wtr_mpy_kv","href":"datacollector\/UserGuide\/Processors\/Base64Encoder.html#concept_wtr_mpy_kv","menu": {"hasChildren":true,},"tocID":"concept_wtr_mpy_kv-d46e63145","next":"concept_wtr_mpy_kv-d46e63145",},{"title":"Data Parser","shortdesc":"\n            <p class=\"shortdesc\">The Data Parser processor allows you to parse supported data formats embedded in a         field. You can parse NetFlow embedded\n               in a byte array field or syslog messages embedded in a         string field. \n            </p>\n         ","id":"concept_xw3_4xk_r1b","href":"datacollector\/UserGuide\/Processors\/DataParser.html#concept_xw3_4xk_r1b","menu": {"hasChildren":true,},"tocID":"concept_xw3_4xk_r1b-d46e63202","next":"concept_xw3_4xk_r1b-d46e63202",},{"title":"Delay","id":"concept_ez5_pvf_wbb","href":"datacollector\/UserGuide\/Processors\/Delay.html#concept_ez5_pvf_wbb","menu": {"hasChildren":true,},"tocID":"concept_ez5_pvf_wbb-d46e63301","next":"concept_ez5_pvf_wbb-d46e63301",},{"title":"Expression Evaluator","id":"concept_zm2_pp3_wq","href":"datacollector\/UserGuide\/Processors\/Expression.html#concept_zm2_pp3_wq","menu": {"hasChildren":true,},"tocID":"concept_zm2_pp3_wq-d46e63355","next":"concept_zm2_pp3_wq-d46e63355",},{"title":"Field Flattener","id":"concept_njn_3kk_fx","href":"datacollector\/UserGuide\/Processors\/FieldFlattener.html#concept_njn_3kk_fx","menu": {"hasChildren":true,},"tocID":"concept_njn_3kk_fx-d46e63565","next":"concept_njn_3kk_fx-d46e63565",},{"title":"Field Hasher","shortdesc":"\n            <p class=\"shortdesc\">The Field Hasher uses an algorithm to encode data. Use Field Hasher to encode         highly-sensitive data. For example,\n               you might use Field Hasher to encode social security or         credit card numbers.\n            </p>\n         ","id":"concept_ivv_c3k_wq","href":"datacollector\/UserGuide\/Processors\/FieldHasher.html#concept_ivv_c3k_wq","menu": {"hasChildren":true,},"tocID":"concept_ivv_c3k_wq-d46e63713","next":"concept_ivv_c3k_wq-d46e63713",},{"title":"Field Masker","shortdesc":"\n            <p class=\"shortdesc\">The Field Masker masks string values based on the selected mask type. You can use     variable-length, fixed-length, custom,\n               or regular expression masks. Custom masks can reveal part     of the string value.\n            </p>\n         ","id":"concept_hjc_t4k_wq","href":"datacollector\/UserGuide\/Processors\/FieldMasker.html#concept_hjc_t4k_wq","menu": {"hasChildren":true,},"tocID":"concept_hjc_t4k_wq-d46e63867","next":"concept_hjc_t4k_wq-d46e63867",},{"title":"Field Merger","shortdesc":"\n            <p class=\"shortdesc\">The Field Merger merges one or more fields in a record to a different location in the   record. Use only for records with\n               a list or map structure. \n            </p>\n         ","id":"concept_pgm_tsl_gt","href":"datacollector\/UserGuide\/Processors\/FieldMerger.html#concept_pgm_tsl_gt","menu": {"hasChildren":true,},"tocID":"concept_pgm_tsl_gt-d46e63970","next":"concept_pgm_tsl_gt-d46e63970",},{"title":"Field Order","shortdesc":"\n            <p class=\"shortdesc\">The Field Order processor orders fields in a map or list-map field and outputs the         fields into a list-map or list\n               root field. \n            </p>\n         ","id":"concept_krp_5fv_vy","href":"datacollector\/UserGuide\/Processors\/FieldOrder.html#concept_krp_5fv_vy","menu": {"hasChildren":true,},"tocID":"concept_krp_5fv_vy-d46e64027","next":"concept_krp_5fv_vy-d46e64027",},{"title":"Field Pivoter","id":"concept_ekg_313_qw","href":"datacollector\/UserGuide\/Processors\/ListPivoter.html#concept_ekg_313_qw","menu": {"hasChildren":true,},"tocID":"concept_ekg_313_qw-d46e64129","next":"concept_ekg_313_qw-d46e64129",},{"title":"Field Remover","id":"concept_jdd_blr_wq","href":"datacollector\/UserGuide\/Processors\/FieldRemover.html#concept_jdd_blr_wq","menu": {"hasChildren":true,},"tocID":"concept_jdd_blr_wq-d46e64228","next":"concept_jdd_blr_wq-d46e64228",},{"title":"Field Renamer","shortdesc":"\n            <p class=\"shortdesc\">Use the Field Renamer to rename fields in a record. You can specify individual fields to         rename or use regular expressions\n               to rename sets of fields. \n            </p>\n         ","id":"concept_vyv_zsg_ht","href":"datacollector\/UserGuide\/Processors\/FieldRenamer.html#concept_vyv_zsg_ht","menu": {"hasChildren":true,},"tocID":"concept_vyv_zsg_ht-d46e64282","next":"concept_vyv_zsg_ht-d46e64282",},{"title":"Field Replacer","shortdesc":"\n            <p class=\"shortdesc\">The Field Replacer replaces values in fields with nulls or with new values. Use the         Field Replacer to update values\n               or to replace invalid values.\n            </p>\n         ","id":"concept_rw4_2d3_4cb","href":"datacollector\/UserGuide\/Processors\/FieldReplacer.html#concept_rw4_2d3_4cb","menu": {"hasChildren":true,},"tocID":"concept_rw4_2d3_4cb-d46e64387","next":"concept_rw4_2d3_4cb-d46e64387",},{"title":"Field Splitter","shortdesc":"\n            <p class=\"shortdesc\">The Field Splitter splits string data based on a regular expression and passes the   separated data to new fields. Use the\n               Field Splitter to split complex string values into logical   components. \n            </p>\n         ","id":"concept_vlj_vph_yq","href":"datacollector\/UserGuide\/Processors\/FieldSplitter.html#concept_vlj_vph_yq","menu": {"hasChildren":true,},"tocID":"concept_vlj_vph_yq-d46e64607","next":"concept_vlj_vph_yq-d46e64607",},{"title":"Field Type Converter","shortdesc":"\n            <p class=\"shortdesc\">The Field Type Converter converts the data types of fields to compatible data types. You     might use the Field Type Converter\n               to convert the data types of fields before performing     calculations. You can also use the Field Type Converter to change\n               the scale of decimal     data.\n            </p>\n         ","id":"concept_is3_zkp_wq","href":"datacollector\/UserGuide\/Processors\/FieldTypeConverter.html#concept_is3_zkp_wq","menu": {"hasChildren":true,},"tocID":"concept_is3_zkp_wq-d46e64821","next":"concept_is3_zkp_wq-d46e64821",},{"title":"Field Zip","id":"concept_o3b_t1k_yx","href":"datacollector\/UserGuide\/Processors\/FieldZip.html#concept_o3b_t1k_yx","menu": {"hasChildren":true,},"tocID":"concept_o3b_t1k_yx-d46e64978","next":"concept_o3b_t1k_yx-d46e64978",},{"title":"Geo IP","id":"concept_fch_fc3_ms","href":"datacollector\/UserGuide\/Processors\/GeoIP.html#concept_fch_fc3_ms","menu": {"hasChildren":true,},"tocID":"concept_fch_fc3_ms-d46e65188","next":"concept_fch_fc3_ms-d46e65188",},{"title":"Groovy Evaluator","id":"concept_ldh_sct_gv","href":"datacollector\/UserGuide\/Processors\/Groovy.html#concept_ldh_sct_gv","menu": {"hasChildren":true,},"tocID":"concept_ldh_sct_gv-d46e65470","next":"concept_ldh_sct_gv-d46e65470",},{"title":"HBase Lookup","shortdesc":"\n            <p class=\"shortdesc\">The HBase Lookup processor performs key-value lookups in HBase and passes the lookup         values to fields. Use the HBase\n               Lookup to enrich records with additional data.\n            </p>\n         ","id":"concept_mnj_zhq_bw","href":"datacollector\/UserGuide\/Processors\/HBaseLookup.html#concept_mnj_zhq_bw","menu": {"hasChildren":true,},"tocID":"concept_mnj_zhq_bw-d46e66410","next":"concept_mnj_zhq_bw-d46e66410",},{"title":"Hive Metadata","id":"concept_rz5_nft_zv","href":"datacollector\/UserGuide\/Processors\/HiveMetadata.html#concept_rz5_nft_zv","menu": {"hasChildren":true,},"tocID":"concept_rz5_nft_zv-d46e66794","next":"concept_rz5_nft_zv-d46e66794",},{"title":"HTTP Client","shortdesc":"\n            <p class=\"shortdesc\"></p>\n         ","id":"concept_ghx_ypr_fw","href":"datacollector\/UserGuide\/Processors\/HTTPClient.html#concept_ghx_ypr_fw","menu": {"hasChildren":true,},"tocID":"concept_ghx_ypr_fw-d46e67876","next":"concept_ghx_ypr_fw-d46e67876",},{"title":"JavaScript Evaluator","id":"concept_n2p_jgf_lr","href":"datacollector\/UserGuide\/Processors\/JavaScript.html#concept_n2p_jgf_lr","menu": {"hasChildren":true,},"tocID":"concept_n2p_jgf_lr-d46e68837","next":"concept_n2p_jgf_lr-d46e68837",},{"title":"JDBC Lookup","shortdesc":"\n            <p class=\"shortdesc\">The JDBC Lookup processor uses a JDBC connection to perform lookups in a database         table and pass the lookup values\n               to fields. Use the JDBC Lookup to enrich records with         additional data.\n            </p>\n         ","id":"concept_ysc_ccy_hw","href":"datacollector\/UserGuide\/Processors\/JDBCLookup.html#concept_ysc_ccy_hw","menu": {"hasChildren":true,},"tocID":"concept_ysc_ccy_hw-d46e69643","next":"concept_ysc_ccy_hw-d46e69643",},{"title":"JDBC Tee","id":"concept_qbx_lcy_hw","href":"datacollector\/UserGuide\/Processors\/JDBCTee.html#concept_qbx_lcy_hw","menu": {"hasChildren":true,},"tocID":"concept_qbx_lcy_hw-d46e69932","next":"concept_qbx_lcy_hw-d46e69932",},{"title":"JSON Generator","id":"concept_jmg_hw1_h1b","href":"datacollector\/UserGuide\/Processors\/JSONGenerator.html#concept_jmg_hw1_h1b","menu": {"hasChildren":true,},"tocID":"concept_jmg_hw1_h1b-d46e70142","next":"concept_jmg_hw1_h1b-d46e70142",},{"title":"JSON Parser","id":"concept_bs1_4t3_yq","href":"datacollector\/UserGuide\/Processors\/JSONParser.html#concept_bs1_4t3_yq","menu": {"hasChildren":true,},"tocID":"concept_bs1_4t3_yq-d46e70198","next":"concept_bs1_4t3_yq-d46e70198",},{"title":"Jython Evaluator","id":"concept_a1h_lkf_lr","href":"datacollector\/UserGuide\/Processors\/Jython.html#concept_a1h_lkf_lr","menu": {"hasChildren":true,},"tocID":"concept_a1h_lkf_lr-d46e70255","next":"concept_a1h_lkf_lr-d46e70255",},{"title":"Kudu Lookup","shortdesc":"\n            <p class=\"shortdesc\">The Kudu Lookup processor performs lookups in a Kudu table and passes the lookup values         to fields. Use the Kudu Lookup\n               to enrich records with additional data.\n            </p>\n         ","id":"concept_a1x_3wl_p1b","href":"datacollector\/UserGuide\/Processors\/KuduLookup.html#concept_a1x_3wl_p1b","menu": {"hasChildren":true,},"tocID":"concept_a1x_3wl_p1b-d46e71061","next":"concept_a1x_3wl_p1b-d46e71061",},{"title":"Log Parser","id":"concept_ulm_qdq_fs","href":"datacollector\/UserGuide\/Processors\/LogParser.html#concept_ulm_qdq_fs","menu": {"hasChildren":true,},"tocID":"concept_ulm_qdq_fs-d46e71429","next":"concept_ulm_qdq_fs-d46e71429",},{"title":"Postgres Metadata","id":"concept_lcp_ssh_qcb","href":"datacollector\/UserGuide\/Processors\/JDBCMetadata.html#concept_lcp_ssh_qcb","menu": {"hasChildren":true,},"tocID":"concept_lcp_ssh_qcb-d46e71529","next":"concept_lcp_ssh_qcb-d46e71529",},{"title":"Record Deduplicator","shortdesc":"\n            <p class=\"shortdesc\">The Record Deduplicator evaluates records for duplicate data and routes data to two         streams -  one for unique records\n               and one for duplicate records. Use the Record Deduplicator         to discard duplicate data or route duplicate data through\n               different processing logic. \n            </p>\n         ","id":"concept_z3m_v52_zq","href":"datacollector\/UserGuide\/Processors\/RDeduplicator.html#concept_z3m_v52_zq","menu": {"hasChildren":true,},"tocID":"concept_z3m_v52_zq-d46e71814","next":"concept_z3m_v52_zq-d46e71814",},{"title":"Redis Lookup","shortdesc":"\n            <p class=\"shortdesc\">The Redis Lookup processor performs key-value lookups in Redis and passes the lookup         values to fields. Use the Redis\n               Lookup to enrich records with additional data.\n            </p>\n         ","id":"concept_ng3_lpr_pv","href":"datacollector\/UserGuide\/Processors\/RedisLookup.html#concept_ng3_lpr_pv","menu": {"hasChildren":true,},"tocID":"concept_ng3_lpr_pv-d46e71916","next":"concept_ng3_lpr_pv-d46e71916",},{"title":"Salesforce Lookup","shortdesc":"\n            <p class=\"shortdesc\">The Salesforce Lookup processor performs lookups in a Salesforce object and passes         the lookup values to fields. Use\n               the Salesforce Lookup to enrich records with additional         data.\n            </p>\n         ","id":"concept_k23_3rk_yx","href":"datacollector\/UserGuide\/Processors\/SalesforceLookup.html#concept_k23_3rk_yx","menu": {"hasChildren":true,},"tocID":"concept_k23_3rk_yx-d46e72076","next":"concept_k23_3rk_yx-d46e72076",},{"title":"Schema Generator","id":"concept_rfz_ks3_x1b","href":"datacollector\/UserGuide\/Processors\/SchemaGenerator.html#concept_rfz_ks3_x1b","menu": {"hasChildren":true,},"tocID":"concept_rfz_ks3_x1b-d46e72365","next":"concept_rfz_ks3_x1b-d46e72365",},{"title":"Spark Evaluator","shortdesc":"\n            <p class=\"shortdesc\">The Spark Evaluator performs custom processing within a pipeline based on a Spark         application that you develop.</p>\n         ","id":"concept_cpx_1lm_zx","href":"datacollector\/UserGuide\/Processors\/Spark.html#concept_cpx_1lm_zx","menu": {"hasChildren":true,},"tocID":"concept_cpx_1lm_zx-d46e72575","next":"concept_cpx_1lm_zx-d46e72575",},{"title":"SQL Parser","shortdesc":"\n            <p class=\"shortdesc\"></p>\n         ","id":"concept_zh2_kfj_tdb","href":"datacollector\/UserGuide\/Processors\/SQLParser.html#concept_zh2_kfj_tdb","menu": {"hasChildren":true,},"tocID":"concept_zh2_kfj_tdb-d46e72956","next":"concept_zh2_kfj_tdb-d46e72956",},{"title":"Static Lookup","shortdesc":"\n            <p class=\"shortdesc\">The Static Lookup processor performs lookups of key-value pairs that are stored in local         memory and passes the lookup\n               values to fields. Use the Static Lookup to store String values         in memory that the pipeline can look up at runtime\n               to enrich records with additional         data.\n            </p>\n         ","id":"concept_aqz_t4r_pv","href":"datacollector\/UserGuide\/Processors\/StaticLookup.html#concept_aqz_t4r_pv","menu": {"hasChildren":true,},"tocID":"concept_aqz_t4r_pv-d46e73519","next":"concept_aqz_t4r_pv-d46e73519",},{"title":"Stream Selector","shortdesc":"\n            <p class=\"shortdesc\">The Stream Selector passes data to streams based on conditions. Define a condition for     each stream of data that you want\n               to create. The Stream Selector uses a default stream to pass     records that do not match user-defined conditions. \n            </p>\n         ","id":"concept_tqv_t5r_wq","href":"datacollector\/UserGuide\/Processors\/StreamSelector.html#concept_tqv_t5r_wq","menu": {"hasChildren":true,},"tocID":"concept_tqv_t5r_wq-d46e73579","next":"concept_tqv_t5r_wq-d46e73579",},{"title":"Value Replacer (Deprecated)","id":"concept_o5k_dmf_zq","href":"datacollector\/UserGuide\/Processors\/ValueReplacer.html#concept_o5k_dmf_zq","menu": {"hasChildren":true,},"tocID":"concept_o5k_dmf_zq-d46e73736","next":"concept_o5k_dmf_zq-d46e73736",},{"title":"XML Flattener","id":"concept_ck4_255_sv","href":"datacollector\/UserGuide\/Processors\/XMLFlattener.html#concept_ck4_255_sv","menu": {"hasChildren":true,},"tocID":"concept_ck4_255_sv-d46e74018","next":"concept_ck4_255_sv-d46e74018",},{"title":"XML Parser","id":"concept_dtt_q5q_k5","href":"datacollector\/UserGuide\/Processors\/XMLParser.html#concept_dtt_q5q_k5","menu": {"hasChildren":true,},"tocID":"concept_dtt_q5q_k5-d46e74118","next":"concept_dtt_q5q_k5-d46e74118",}]});