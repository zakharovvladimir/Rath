import { IECStatus } from './interfaces';

export const AVATAR_IMG_LIST: string[] = [];
new Array(18)
    .fill(0)
    .map((_, i) => `avatar-B-${`${i + 1}`.padStart(2, '0')}.png`)
    .forEach((item) => {
        AVATAR_IMG_LIST.push(item);
    });
// 功能相同，使用下面方式进行export 会导致报错 原因可能是因为表达式的问题 待确认 有懂哥填个坑
// export const AVATAR_IMG_LIST = fixedLengthNumbers(new Array(18).fill(0).map((_, i) => i + 1)).map(n => `avatar-B-${n}.png`);

export const DEFAULT_AVATAR_URL_PREFIX = 'https://foghorn-assets.s3.ap-northeast-1.amazonaws.com/avatar/';

export const RATH_INDEX_COLUMN_KEY = '__rath_index_col_key__';

export const PIVOT_KEYS = {
    dataSource: 'dataSource',
    editor: 'editor',
    support: 'support',
    megaAuto: 'megaAuto',
    semiAuto: 'semiAuto',
    dashBoardDesigner: 'dashBoardDesigner',
    painter: 'painter',
    collection: 'collection',
    dashboard: 'dashboard',
    causal: 'causal',
} as const;

export const COMPUTATION_ENGINE = {
    clickhouse: 'clickhouse',
    webworker: 'webworker',
};

export const EXPLORE_MODE = {
    first: 'first',
    familiar: 'familiar',
    comprehensive: 'comprehensive',
    manual: 'manual',
};

export const DEMO_DATA_REQUEST_TIMEOUT = 1000 * 10;

export const ENGINE_CONNECTION_STAGES: Array<{ stage: number; name: IECStatus; description?: string }> = [
    { stage: 0, name: 'client', description: 'client module importetd.' },
    { stage: 1, name: 'proxy', description: 'database proxy connector lanuched.' },
    { stage: 2, name: 'engine', description: 'clickhouse connected.' },
];

export const RESULT_STORAGE_SPLITOR = '\n===RATH_STORAGE_SPLITOR===\n';

export const STORAGE_FILE_SUFFIX = 'krs';

export const EDITOR_URL = 'https://kanaries.cn/vega-editor/';

export const STORAGE_INSTANCE = 'rath_storage_instance'

export const STORAGES = {
    DATASOURCE: 'datasource',
    WORKSPACE: 'workspace',
    META: 'meta',
    MODEL: 'model',
    STATE: 'state',
    ITERATOR: 'iterator',
    CONFIG: 'config',
    ITERATOR_META: 'iterator_meta',
}
