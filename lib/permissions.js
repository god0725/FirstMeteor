/**
 * Created by god0725 on 2015/10/30.
 */
ownsDocument = function(userId, doc) {
    return doc && doc.userId === userId;
}