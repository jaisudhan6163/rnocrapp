import { launchImageLibrary } from 'react-native-image-picker';
import MlkitOcr from 'react-native-mlkit-ocr';

const LaunGal = async () => {
    try{
        const response = await launchImageLibrary({
            mediaType: 'photo',
            includeBase64: true,
        });
        var uri = String(response["assets"][0]["uri"]);
        var resultFromUri = await MlkitOcr.detectFromUri(uri);
        var res = {'message':'success', 'body':resultFromUri}

    }catch(e){
        var res = {'message':'error', 'body':e}
    }
//    console.log(res);
    return (res);
};

export default LaunGal;