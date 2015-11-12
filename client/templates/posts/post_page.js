/**
 * Created by god0725 on 2015/11/12.
 */
Template.postPage.helpers({
    comments: function(){
        return Comments.find({postId: this._id});
    }
});