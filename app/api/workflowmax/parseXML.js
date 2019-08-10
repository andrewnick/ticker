import xmlescape from 'xml-escape';
import util from 'util';
import { parseString, processors } from 'xml2js';

const parseXML = xml => {
  const escapedXML = xmlescape(xml, '<>');
  const { firstCharLowerCase, parseNumbers, parseBooleans } = processors;

  return new Promise(resolve => {
    parseString(
      escapedXML,
      {
        // tagNameProcessors: [firstCharLowerCase],
        valueProcessors: [parseNumbers, parseBooleans],
        trim: true,
        explicitArray: false
      },
      (err, data) => {
        const dataStr = util.inspect(data, false, null); // Output nested json - not just first level
        console.log(dataStr);

        resolve(data);
      }
    );
  });
};

export default parseXML;
